import { Html, Head, Main, NextScript } from 'next/document'

// NOTE: Document는 서버사이드에서만 렌더링됨. 기본 HTML에 대한 설정을 여기서 해준다고 생각하면 됨.
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="root-portal"></div>
      </body>
    </Html>
  )
}
