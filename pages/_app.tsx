import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout/Layout";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import style from "./index.module.css";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "500", "700"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${style.cssBackground}`}>
      <Layout>
        <Head>
          <title>Global BNS</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
