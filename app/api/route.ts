import { NextRequest } from "next/server"
import { getPDS } from "../lib/main.ts"

export async function GET() {
  let PDS = getPDS()
  return new Response(
    PDS,
    {status: 200, headers: {"Content-Type": "application/json"}}
  )
}
