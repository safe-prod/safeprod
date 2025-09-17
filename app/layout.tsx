import type { Metadata } from "next"
import localFont from "next/font/local"

const font = localFont({
  src: [
    {path: "./styles/fontRegular.woff2", weight: "400"},
    {path: "./styles/fontBold.woff2", weight: "700"}
  ]
})

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering." 
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${font.className}`}>
      <head>
        <link rel="icon" type="image/png" sizes="96x96" href="/styles/iconLight.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
