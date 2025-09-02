import { z } from "zod"
import { createMcpHandler } from "mcp-handler"

// import { Coin } from "./journal.ts"
 
const handler = createMcpHandler(
  (server) => {
    server.tool(
      "toss_coin",
      "Tosses a coin",
      { sides: z.number().int().min(2) },
      async ({ sides }) => {
        const value = 1 + Math.floor(Math.random() * sides);
        return {
          content: [{ type: "text", text: `You tossed a ${value}!` }],
        }
      }
    )
  },
  {},
  { basePath: "/api" }
)
 
export { handler as GET, handler as POST, handler as DELETE }
