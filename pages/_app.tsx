import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layout"
function App({ Component, pageProps }) {
    return (
        <>
        <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
        <ChakraProvider>

            <Layout>
        <Component {...pageProps} />
        </Layout>
        </ChakraProvider>
    </>
    )
    }

export default App;