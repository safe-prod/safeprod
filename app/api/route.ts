import { NextRequest } from "next/server"

export async function GET() {
  return new Response(
    JSON.stringify({"type": "SAFE", "id": "asdf12", "journal": [["Cash",100,0]]}),
    {status: 200, headers: {"Content-Type": "application/json"}}
  )
}
