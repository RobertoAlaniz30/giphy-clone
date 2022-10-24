import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material";
import { lightTheme } from '../theme/lightTheme';
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import StoreProvider from '../store/StoreProvider'
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component,
  emotionCache = clientSideEmotionCache, pageProps }: any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp
