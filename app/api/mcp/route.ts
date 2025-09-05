import { createMcpHandler } from "mcp-handler"
import { z } from "zod"
import fs from "fs"
import path from "path"
import { matrix } from "mathjs"

export const getContract = () => {
  let journal = JSON.parse(fs.readFileSync(path.join(process.cwd(), "app/api/mcp/_journal"), "utf8"))
  return {type: "SAFE", id: "asdf10", journal: journal}
}

const MCPServer = createMcpHandler(
  (server) => {
    server.tool(
      "retrieve_name",
      "Retrieve the name of the user",
      {},
      async ({}) => {
        return {
          content: [{ type: "text", text: `James`}],
        }
      }
    )
  },
  {},
  { basePath: "/api" },
)

export { MCPServer as GET, MCPServer as POST }
