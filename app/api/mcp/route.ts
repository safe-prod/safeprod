import { createMcpHandler } from "mcp-handler"
import { z } from "zod"

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "read_journal",
      "Read your accounting journal",
      {},
      async ({}) => {
        return {
          content: [{ type: "text", text: `|Line Item|Debit|Credit|\n|---|---|---|\n|Cash||100|\n|Fixed assets|50||` }],
        }
      }
    )
  },
  {},
  { basePath: "/api" },
)

export { handler as GET, handler as POST }
