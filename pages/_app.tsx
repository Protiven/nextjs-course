import '../styles/globals.css'
import { useEffect } from 'react'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [])

  return <Component {...pageProps} />
}

export default App
