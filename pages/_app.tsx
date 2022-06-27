import type { AppProps } from "next/app";

import { useRecoilValue } from "recoil";
import { darkState } from "store/state";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import { darkTheme, lightTheme } from "styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useRecoilValue(darkState);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
