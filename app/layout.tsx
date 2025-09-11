/***

# Finance

Meaning:

- Derived from Middle English finaunce, from finer (“to pay ransom”), from English fine (“to pay a penalty”)), from *fin (“end”)*, from Latin fīnis.
- Original English sense that appeared c. 1400 was “ending”. The sense of *ending or satisfying a debt* originated from French influence.
- The management of money and other assets.

***/

import "./style/globals.css"
import localFont from "next/font/local"
import type { Metadata } from "next"

const font = localFont({
  src: [
    {path: "./style/regular.woff2", weight: "400"},
    {path: "./style/bold.woff2", weight: "700"}
  ]
})

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering." 
}

export default function layout({children}: {children: React.ReactNode}) {
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
