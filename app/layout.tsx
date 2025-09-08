import type { Metadata } from "next"
import localFont from "next/font/local"
import "./style/globals.css"

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering." 
}

export default function Layout({children}: {children: React.ReactNode}) {
  const font = localFont({
    src: [
      {path: "./style/regular.woff2", weight: "400"},
      {path: "./style/bold.woff2", weight: "700"}
    ]
  })
  return (
    <html lang="en" className={font.className}>
      <head>
        <link rel="icon" type="image/png" sizes="96x96" href="/style/icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
