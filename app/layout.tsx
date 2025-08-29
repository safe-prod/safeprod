import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering",
};
 
const productFont = localFont({
  src: [
    {path: '../public/fonts/CMUSerif-Roman.woff2', weight: '400'},
    {path: '../public/fonts/CMUSerif-Bold.woff2', weight: '700'}
  ]
})
 
export default function Product({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={productFont.className}>
      <body>{children}</body>
    </html>
  )
}
