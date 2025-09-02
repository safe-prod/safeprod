import "./gui/style/globals.css"
import localFont from "next/font/local"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering." 
}

const font = localFont({
  src: [
    {path: "./gui/style/regular.woff2", weight: "400"},
    {path: "./gui/style/bold.woff2", weight: "700"}
  ]
})

const ID = "ajde23dns"

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <link rel="icon" type="image/png" sizes="96x96" href="/gui/style/icon.png" />
      </head>
      <body>
        <div className="m-4 flex flex-col gap-y-4">
         <div className="text-xl flex flex-row gap-x-4">
            <div className="grow-8">
              <span className="font-bold">SAFE</span>
              <span className="pl-2 pr-2">/</span>
              <span>{ID}</span>
            </div>
            <div className="grow-2 flex flex-row gap-x-2">
              <Link href="/gui" className="grow">gui</Link>
              <Link href="/api" className="grow">api</Link>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
