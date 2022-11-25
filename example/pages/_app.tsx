import React from 'react'
import '../components/da-vinci-ui/styles.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
