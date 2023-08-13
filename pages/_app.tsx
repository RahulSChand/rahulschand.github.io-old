import '@/styles/globals.css'
import Script from "next/script";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SMFBL8NKP9"></Script>
<Script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SMFBL8NKP9');
  `}
</Script>
  <Component {...pageProps} />
  </>
}
