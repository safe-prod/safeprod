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
