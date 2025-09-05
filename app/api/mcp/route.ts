import { createMcpHandler } from "mcp-handler"
import { z } from "zod"

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
