import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[url(https://i.ibb.co/bQZStKT/bg.jpg)]  dark:bg-[url(https://i.ibb.co/PFCtVwt/bg-dark.jpg)] bg-cover bg-center bg-no-repeat  min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
