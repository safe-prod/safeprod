import { style } from "./style/style.ts" 
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering." 
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${style.font}`}>
      <head>
        <link rel="icon" type="image/png" sizes="96x96" href="/styles/iconLight.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
