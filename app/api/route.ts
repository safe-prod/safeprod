import { NextRequest } from "next/server"

export async function GET() {
  const data = { message: "SAFE" }
  return new Response(JSON.stringify(data), {status: 200, headers: {"Content-Type": "application/json"}})
}
