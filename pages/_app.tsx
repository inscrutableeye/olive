
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
 return(
  <RecoilRoot>
  <ChakraProvider>
  <Component {...pageProps} />
</ChakraProvider>
</RecoilRoot>
 )
 
}
