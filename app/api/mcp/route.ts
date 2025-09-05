import { createMcpHandler } from "mcp-handler"
import { z } from "zod"

import fs from "fs"
import path from "path"
import { matrix } from "mathjs"

export const Buy = () => {
  let journal = JSON.parse(fs.readFileSync(path.join(process.cwd(), "app/api/mcp/_journal"), "utf8"))
  return journal
}

const handler = createMcpHandler(
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

export { handler as GET, handler as POST }
