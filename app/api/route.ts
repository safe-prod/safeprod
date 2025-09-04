import { NextRequest } from "next/server"
import { setupDatabase } from "./mcp/database.ts"

export async function GET(request: NextRequest) {
  const message = await setupDatabase()
  const data = { message: message }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
