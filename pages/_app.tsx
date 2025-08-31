import { AppProps } from "next/app"
import Head from "next/head"
import "../styles/globals.css"
import localFont from "next/font/local"
 
const safeFont = localFont({
  src: [
    {path: "../public/fonts/safeFontRegular.woff2", weight: "400"},
    {path: "../public/fonts/safeFontBold.woff2", weight: "700"}
  ]
})

export default function SAFE({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SAFE</title>
        <meta name="description" content="Superintelligence Alignment through Financial Engineering." />
      </Head>
      <html lang="en" className={safeFont.className}>
        <body>
          <Component {...pageProps} />
        </body>
      </html>
    </>
  )
}
