import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

/**
 *  @param {AppProps} props
 *  @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
