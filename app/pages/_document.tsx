import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={'h-screen border-8 border-blue-400'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
