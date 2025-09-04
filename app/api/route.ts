import { NextRequest } from "next/server"
import DBResult from "./mcp/database.ts"

export async function GET(request: NextRequest) {
  const data = { message: DBResult.toString() }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
