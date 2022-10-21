import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material";
import { lightTheme } from '../theme/lightTheme';
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component,
  emotionCache = clientSideEmotionCache, pageProps }: any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp
