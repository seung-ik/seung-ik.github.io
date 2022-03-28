import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from "@styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
