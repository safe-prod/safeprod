import "./style/globals.css"
import { style } from "./style/style.ts" 
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering." 
}

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${style.font}`}>
      <head>
        <link rel="icon" type="image/png" sizes="96x96" href="/style/icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
