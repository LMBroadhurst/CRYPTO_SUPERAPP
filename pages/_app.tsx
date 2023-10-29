import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Arimo, Inter, Roboto, Roboto_Condensed } from 'next/font/google';
 
const arimo = Arimo({ weight: "400", subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={arimo.className}>
      <Component {...pageProps} />
    </main>
  )
}
