import "./globals.css"
import localFont from "next/font/local"
import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering." 
}

const font = localFont({
  src: [
    {path: "../public/fonts/regular.woff2", weight: "400"},
    {path: "../public/fonts/bold.woff2", weight: "700"}
  ]
})

export default function SAFE({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
