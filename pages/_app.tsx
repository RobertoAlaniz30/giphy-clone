import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material";
import { lightTheme } from '../theme/lightTheme';
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import StoreProvider from '../store/StoreProvider'
const clientSideEmotionCache = createEmotionCache();
import { SnackbarProvider } from "notistack";

function MyApp({ Component,
  emotionCache = clientSideEmotionCache, pageProps }: any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <SnackbarProvider>
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp
