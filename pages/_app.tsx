import Root from "components/common/Root";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <RecoilRoot>
        <Root children={<Component {...pageProps} />}/>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
