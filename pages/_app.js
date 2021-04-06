import '../styles/globals.sass'
import '../styles/main.sass'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
          <Head>
            <title>Greynode Holding Page</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            ></meta>
            <meta property="og:title" content="Greynode Holding Page"></meta>
            <meta
              property="og:description"
              content="A holding page that is seen whilst the website is being created."
            ></meta>
            <meta
              property="og:image"
              content="http://euro-travel-example.com/thumbnail.jpg"
            ></meta>
            <meta property="og:url" content="https://greynode.co.uk"></meta>
            <meta property="og:site_name" content="Greynode Limited"></meta>
            <link rel="stylesheet" href="https://use.typekit.net/diu0dbf.css" />
          </Head>
          <Component {...pageProps} />
         </>
}

export default MyApp
