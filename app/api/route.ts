import { NextRequest } from "next/server"
import { setupDatabase } from "./mcp/database.ts"

export async function GET(request: NextRequest) {
  try {
    const message = await setupDatabase()
    const data = { message: message }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Error setting up database:", error)
    return new Response(JSON.stringify({ error: "Failed to set up database" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
