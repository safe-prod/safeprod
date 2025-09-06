import { createMcpHandler } from "mcp-handler"
import { z } from "zod"

const handler = createMcpHandler(
  (server) => {
    server.tool("getDocument", "Get document", {}, async () => {
      return {
        content: [{ type: "text", text: `Hello World`}],
      }
    })
  },
  {},
  { basePath: "/api" },
)

export { handler as GET, handler as POST }
