import fs from "fs"
import path from "path"
import { NextRequest } from "next/server"
var nj = require("numjs")

export async function GET() {
  let journal = nj.array(JSON.parse(fs.readFileSync(path.join(process.cwd(), "app/api/mcp/_journal"), "utf8")))
  const data = { message: journal.get(0) }
  return new Response(JSON.stringify(data), {status: 200, headers: {"Content-Type": "application/json"}})
}
