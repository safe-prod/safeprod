import fs from "fs"
import path from "path"
import { NextRequest } from "next/server"

export async function GET() {
  let journal = JSON.parse(fs.readFileSync(path.join(process.cwd(), "app/api/mcp/_journal"), "utf8"))
  const data = { message: journal[0] }
  return new Response(JSON.stringify(data), {status: 200, headers: {"Content-Type": "application/json"}})
}
