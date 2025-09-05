import "./lib/style/globals.css"
import localFont from "next/font/local"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering." 
}

const font = localFont({
  src: [
    {path: "./lib/style/regular.woff2", weight: "400"},
    {path: "./lib/style/bold.woff2", weight: "700"}
  ]
})

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <link rel="icon" type="image/png" sizes="96x96" href="/lib/style/icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
