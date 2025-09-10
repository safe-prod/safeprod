/***

# Finance

Historically, finance was derived from Middle English finaunce, from Anglo-Norman, Middle French finance, from finer (“to pay ransom”)
(whence also English fine (“to pay a penalty”)), from *fin (“end”)*, from Latin fīnis. Original English sense that appeared c. 1400 was “ending”.
The sense of *ending or satisfying a debt* originated from French influence.

Currently, finance is defined as the management of money and other assets.

***/

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
      <body className="m-2 flex flex-col bg-white">
        {children}
      </body>
    </html>
  )
}
