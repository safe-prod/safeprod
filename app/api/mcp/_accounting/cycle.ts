import fs from "fs"
import path from "path"
import { matrix } from "mathjs"

export const getContract = () => {
  let journal = JSON.parse(fs.readFileSync(path.join(process.cwd(), "app/api/mcp/_journal"), "utf8"))
  return {type: "SAFE", id: "asdf10", journal: journal}
}
