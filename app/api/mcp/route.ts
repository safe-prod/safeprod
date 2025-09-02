import { z } from "zod"
import { createMcpHandler } from "mcp-handler"

import { Coin } from "./journal.ts"
 
const handler = createMcpHandler(
  (server) => {
    server.tool(...Coin)
  },
  {},
  { basePath: "/api" }
)
 
export { handler as GET, handler as POST, handler as DELETE }
