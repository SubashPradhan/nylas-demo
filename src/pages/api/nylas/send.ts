import { parse_token } from "@/utils/token";
import type { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:8000"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST") {
    return res.status(405).json({message: "Method Not Allowed"})
  }
  
  try {
    const cookies = req.headers.cookie || ""
    let token = null
    if (cookies){
      token = parse_token(cookies)
    } else {
      res.status(401).json({message: "No token found, please authenticate mailbox"})
    }
    const body = req.body
    const response = await fetch(`${BASE_URL}/nylas/send`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: body
    })

    if (!response.ok) {
      console.error("Failed to send email for the user:", response.statusText)
      return res.status(response.status).json({message: "Failed to send email for the user"})
    }

    const data = await response.json();
    const send_data = await data["data"]
    console.log("In the proxy", send_data)
    return res.status(200).json(send_data)
  } catch (error){
    console.error("Error while retreiving send for the user:", error)
    return res.status(500).json({message: "Error while retreiving send for the user"})
  }
}