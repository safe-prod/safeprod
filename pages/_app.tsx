import type { AppProps } from 'next/app'
 
export default function SAFE({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
