import "./globals.css"
import type { Metadata } from "next"
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering.",
}
 
const safeFont = localFont({
  src: [
    {path: '../public/fonts/safeFontRegular.woff2', weight: '400'},
    {path: '../public/fonts/safeFontBold.woff2', weight: '700'}
  ]
})
 
export default function SAFE({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={safeFont.className}>
      <body>{children}</body>
    </html>
  )
}
