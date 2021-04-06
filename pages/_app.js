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
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"></link>
            <link rel="manifest" href="/site.webmanifest"></link>
          </Head>
          <Component {...pageProps} />
         </>
}

export default MyApp
