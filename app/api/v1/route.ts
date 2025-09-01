import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const data = { message: "Hello, World!" }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}


/*
import type { NextApiRequest, NextApiResponse } from "next"
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ message: "SAFE" })
  }
}
*/
