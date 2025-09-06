import { createMcpHandler } from "mcp-handler"
import { z } from "zod"

const handler = createMcpHandler(
  (server) => {
    server.tool("getDocument", "Get document", {}, getDocument)
  },
  {},
  { basePath: "/api" },
)

const getDocument = async () => {
  return {
    content: [{ type: "text", text: `Hello World`}],
  }
}

export { handler as GET, handler as POST }
