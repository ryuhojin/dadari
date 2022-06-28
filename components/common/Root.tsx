import { useRecoilValue } from "recoil";
import { darkState } from "store/state";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import { darkTheme, lightTheme } from "styles/Theme";
const Root = ({ children }: any) => {
  const darkMode = useRecoilValue(darkState);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};
export default Root;
