import type { Metadata } from "next"
import localFont from "next/font/local"

const font = localFont({
  src: [
    {path: "./whitelabels/fontRegular.woff2", weight: "400"},
    {path: "./whitelabels/fontBold.woff2", weight: "700"}
  ]
})

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering." 
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${font.className}`}>
      <head>
        <link rel="icon" type="image/png" sizes="96x96" href="/whitelabels/iconLight.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
