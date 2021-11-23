import 'reset-css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.css';
import '../styles/markdown.css';
import Footer from 'src/components/molecules/footers/Footer';
import GTag from 'src/components/tools/GTag';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@at_sushi_at" />
        <meta property="fb:app_id" content="344770009435942" />
        <script data-ad-client="ca-pub-5186505760792931" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      </Head>
      <GTag />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
