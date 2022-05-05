import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import Layout from '../components/Layout'
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client = {client}>
        <Layout pageProps = {pageProps} Component = {Component}/>
        {/* <Component {...pageProps} /> */}
      </ApolloProvider>
    </>
  )
}

export default MyApp
