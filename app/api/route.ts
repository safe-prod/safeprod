import { NextRequest } from "next/server"
import { DBResult } from "./mcp/database.ts"

export async function GET(request: NextRequest) {
  const data = { message: JSON.stringify(DBResult) }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
