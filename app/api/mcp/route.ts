import { createMcpHandler } from "mcp-handler"
import { z } from "zod"

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
