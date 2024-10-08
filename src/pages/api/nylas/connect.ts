import type { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:8000"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "GET") {
    return res.status(405).json({message: "Method Not Allowed"})
  }
  
  try {
    const response = await fetch(`${BASE_URL}/nylas/connect`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })

    if (!response.ok) {
      console.error("Failed to start authentication process:", response.statusText)
      return res.status(response.status).json({message: "Failed to start authentication process"})
    }

    const data = await response.json();
    return res.status(200).json(data)
  } catch (error){
    console.error("Error initiating authentication process:", error)
    return res.status(500).json({message: "Error initiating authentiation process"})
  }
}