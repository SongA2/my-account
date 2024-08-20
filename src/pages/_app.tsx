import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { SessionProvider } from 'next-auth/react'

import globalStyles from '@/styles/globalStyles'
import Layout from '@shared/Layout'
import AuthGuard from '@components/auth/AuthGuard'
import Navbar from '@shared/Navbar'
import { AlertContextProvider } from '@contexts/AlertContext'

const client = new QueryClient({})

export default function App({
  Component,
  pageProps: { dehydratedState, session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <SessionProvider session={session}>
        <QueryClientProvider client={client}>
          <Hydrate state={dehydratedState}>
            <AlertContextProvider>
              <AuthGuard>
                <Navbar />
                <Component {...pageProps} />
              </AuthGuard>
            </AlertContextProvider>
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </Layout>
  )
}
