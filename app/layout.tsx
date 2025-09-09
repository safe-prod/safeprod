import "./globals.css"
import localFont from "next/font/local"
import type { Metadata } from "next"

const font = localFont({
  src: [
    {path: "./regular.woff2", weight: "400"},
    {path: "./bold.woff2", weight: "700"}
  ]
})

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering." 
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <link rel="icon" type="image/png" sizes="96x96" href="/icon.png" />
      </head>
      <body className="m-2 flex flex-col bg-gray-200">
        {children}
      </body>
    </html>
  )
}
