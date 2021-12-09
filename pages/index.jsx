import Head from "next/head";
import css from "../styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>FrakTree</title>
        <meta
          name="description"
          content="
          A collection of 1000 fraktal trees building on the polygon Blockchain.
          Each tree minted will assure X trees planted in the real world."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h1 className={css.h1}>Fraktree</h1>

      <div>
        <img src="/assets/tree_home.png" alt="tree" />
        <div>
          <p>
            Show your support for the environnement to everyone by holding a
            FrakTree.
          </p>
          <button>Connect wallet</button>
          <p>Public sale open 5 January 2022</p>
        </div>
      </div>
    </>
  );
}
