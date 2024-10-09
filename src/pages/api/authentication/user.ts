import type { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:8000"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "GET") {
    return res.status(405).json({message: "Method Not Allowed"})
  }
  
  try {
    const cookies = req.headers.cookie || ""
    let token = ""
    if (cookies){
      const tokenMatch = cookies.match(/token=([^;]+)/)
      if (tokenMatch && tokenMatch[1]){
        token = tokenMatch[1]
      }
    } else {
      res.status(401).json({message: "No token found, please authenticate mailbox"})
    }
  
    const response = await fetch(`${BASE_URL}/auth/user`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })

    if (!response.ok) {
      console.error("Failed to ger user details:", response.statusText)
      return res.status(response.status).json({message: "Failed to get user details"})
    }

    const data = await response.json();
    return res.status(200).json(data)
  } catch (error){
    console.error("Error while retreiving user details:", error)
    return res.status(500).json({message: "Error while retreiving user details"})
  }
}