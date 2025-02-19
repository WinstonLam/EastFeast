// src/pages/_app.tsx
import Script from 'next/script';

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
    <Script
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
      strategy="beforeInteractive" // Ensures the script loads before your components mount
    />
    <Component {...pageProps} />
  </>)
}

export default MyApp
