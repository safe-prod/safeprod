import { NextRequest } from "next/server"
import { getContract } from "./mcp/route.ts"

export async function GET() {
  let contract = getContract()
  return new Response(
    JSON.stringify(contract),
    {status: 200, headers: {"Content-Type": "application/json"}}
  )
}
