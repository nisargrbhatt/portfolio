import '../styles/globals.css';
import type { AppProps } from 'next/app';

/**
 *  @param {AppProps} props
 *  @return {any}
 */
function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
