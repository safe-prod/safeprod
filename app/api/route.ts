
/*
import fs from "fs"
import path from "path"
*/
export async function GET() {
  return new Response(
    "PDS",
    {status: 200, headers: {"Content-Type": "application/json"}}
  )
}

/*
export const getPDS = () => {
  let PDS = fs.readFileSync(path.join(process.cwd(), "app/api/PDS.md"), "utf8"))
  return PDS
}
*/

