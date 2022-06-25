import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Globals from "../styles/globals";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globals />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
