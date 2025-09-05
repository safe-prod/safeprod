import fs from "fs"
import path from "path"
import { NextRequest } from "next/server"

export async function GET() {
  const filePath = path.join(process.cwd(), "app/api/mcp/_journal")
  const fileContents = fs.readFileSync(filePath, "utf8")
  const myArray = JSON.parse(fileContents)
  const data = { message: myArray[0] }
  return new Response(JSON.stringify(data), {status: 200, headers: {"Content-Type": "application/json"}})
}
