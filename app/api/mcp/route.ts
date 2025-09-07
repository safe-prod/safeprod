import { createMcpHandler } from "mcp-handler"
import { z } from "zod"
import { getDocument } from "./fop/main.ts"

const handler = createMcpHandler(
  (server) => {
    // server.tool("getDocument", "Get document", {}, getDocument)
    server.tool("getDocument", "Get document", {}, async () => {
      return {
        content: [{ type: "text", text: `This document describes the specifications of the new product.`}],
      }
    })
  },
  {},
  { basePath: "/api" },
)

export { handler as GET, handler as POST }
