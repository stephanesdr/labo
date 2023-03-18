import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'], variable: '--font-jost' })

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${jost.variable} bg-slate-300 font-sans text-black`}>
    <Component {...pageProps} />
  </main>
}
