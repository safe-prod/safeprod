import { NextRequest } from "next/server"
import { getContract } from "../lib/accounting/cycle.ts"

export async function GET() {
  let contract = getContract()
  return new Response(
    JSON.stringify(contract),
    {status: 200, headers: {"Content-Type": "application/json"}}
  )
}
