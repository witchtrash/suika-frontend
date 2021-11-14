import React from 'react';
import { EmotionCache } from '@emotion/cache';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import { AppProps as NextAppProps } from 'next/app';
import { theme } from 'styles/theme';
import { SWRConfig } from 'swr';
import { fetcher } from 'backend/fetcher';

import createEmotionCache from 'styles/createEmotionCache';
import Head from 'next/head';

import '@fontsource/lexend/latin.css';
import '@fontsource/fira-mono';
import 'styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}
const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <Box minH="100vh">
            <Component {...pageProps} />
          </Box>
        </SWRConfig>
      </ChakraProvider>
    </CacheProvider>
  );
};

App.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default App;
