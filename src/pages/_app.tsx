import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Tokens } from '../../src/styles/theme'

const theme = extendTheme({
  colors: {
    green: {
      ...Tokens.green.shades,
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
             <Component {...pageProps} />
         </ChakraProvider>
}
