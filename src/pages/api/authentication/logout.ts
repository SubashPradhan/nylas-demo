import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    res.setHeader('Set-Cookie', 'token=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict');
    res.status(200).json({ message: "Logged out" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
