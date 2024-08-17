import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'

import globalStyles from '@/styles/globalStyles'
import Layout from '@shared/Layout'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'

const client = new QueryClient({})

export default function App({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: AppProps) {
  console.log('_app')
  return (
    <Layout>
      <Global styles={globalStyles} />
      <QueryClientProvider client={client}>
        <Hydrate state={dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Layout>
  )
}
