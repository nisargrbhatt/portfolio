import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '@styles/theme/lightTheme';

const clientSideEmotionCache = createEmotionCache();

/**
 *  @param {AppProps} props
 *  @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps) {
  const { emotionCache = clientSideEmotionCache } = pageProps;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <UserProvider user={pageProps.user}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <CssBaseline />
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
