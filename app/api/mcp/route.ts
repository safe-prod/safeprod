import { createMcpHandler } from "mcp-handler"
import { z } from "zod"
import { getDocument } from "./fop/main.ts"

const handler = createMcpHandler(
  (server) => {
    server.tool("getDocument", "Get document", {}, getDocument)
  },
  {},
  { basePath: "/api" },
)

export { handler as GET, handler as POST }
