import "@/pages/styles.css";
import Head from "next/head";

function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Three in Next</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
