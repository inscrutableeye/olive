
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil'
import "../styles/globals.css";
import Shop from './Shop';

export default function App({ Component, pageProps }: AppProps) {
 return(
  <RecoilRoot>
  <ChakraProvider>

    
  <Component {...pageProps} />


</ChakraProvider>
</RecoilRoot>
 )
 
}
