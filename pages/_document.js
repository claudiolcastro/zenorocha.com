import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const lang = this.props.__NEXT_DATA__.props.pageProps?.post?.lang
    
    return (
      <Html lang={lang ? lang : 'en-US'}>
        <Head>
          <meta charSet="utf-8" />
          <meta content="Zeno Rocha" name="author" />
          <meta property="og:type" content="website" />
          <meta content="summary_large_image" name="twitter:card" />
          
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="alternate icon" href="/favicon.ico" />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}} />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}