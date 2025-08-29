import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering",
};
 
const globalFont = localFont({
  src: [
    {path: '../public/fonts/CMUSerif-Roman.woff2'},
    {path: '../public/fonts/CMUSerif-Bold.woff2'}
  ]
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={globalFont.className}>
      <body>{children}</body>
    </html>
  )
}
