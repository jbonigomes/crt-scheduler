import Head from 'next/head'

import { SessionProvider } from 'next-auth/react'

import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

import '../styles/globals.css'

export default ({ Component, pageProps: { session, ...pageProps } }) => (
  <>
    <Head>
      <title>CRT Scheduler</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </>
)
