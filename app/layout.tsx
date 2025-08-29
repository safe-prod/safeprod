import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering",
};
 
const productFont = localFont({
  src: [
    {path: '../public/fonts/CMUSerif-Roman.woff2', variable: '--font-regular'},
    {path: '../public/fonts/CMUSerif-Bold.woff2', variable: '--font-bold'}
  ]
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${productFont.src[0].variable} ${productFont.src[1].variable}`}>
      <body>{children}</body>
    </html>
  )
}
