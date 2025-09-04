import { NextRequest } from "next/server"
import fs from "fs"
import path from "path"

// api
export async function GET() {
  const filePath = path.join(process.cwd(), "app/api/mcp/journal.csv")
  const fileContents = fs.readFileSync(filePath, "utf8")
  const data = { message: fileContents }
  return new Response(JSON.stringify(data), {status: 200, headers: {"Content-Type": "application/json"}})
}
