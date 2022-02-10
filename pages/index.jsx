import Head from "next/head";
import { Partner, TeamMember, Particles } from "../components";
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
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className={css.home}>
        <h1>Fraktree</h1>
        <div className={css.wrap}>
          <img src="/assets/tree_home.png" alt="tree" />

          <div className={css.connect}>
            <p className={css.desc}>
              Show your support for the environnement to everyone by holding a
              FrakTree.
            </p>
            <button>Connect wallet</button>
            <p className={css.infos}>Public sale open 5 January 2022</p>
          </div>
        </div>
        <div className={css.RSContainer}>
          <a href="" target="_blank">
            <img src="/assets/discord.png" alt="discord" />
          </a>
          <a href="https://twitter.com/FrakTree" target="_blank">
            <img src="/assets/twitter.png" alt="twitter" />
          </a>
          <a href="https://opensea.io/collection/fraktree" target="_blank">
            <img src="/assets/opensea.png" alt="opensea" />
          </a>
        </div>
      </section>

      <section>
        <article className={css.article}>
          <div className={css.textContainer}>
            <h3>What is Fraktree ?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum h
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <img src="/assets/tree_luciole1.png" alt="tree with fireflies" />
        </article>
        <article className={css.article}>
          <img src="/assets/tree_luciole2.png" alt="tree with fireflies" />
          <div className={css.textContainer}>
            <h3>Why ?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum h
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </article>
      </section>

      <section className={css.partner}>
        <h3>Our partners</h3>
        <Partner
          src="/assets/logo_onetree.png"
          text={`as been the industry's standard dummy text ever since the 1500sas been the industry's standard dummy text ever since the 1500sas been the industry's standard dummy text ever since the 1500s`}
          link="https://onetreeplanted.org/"
        />
      </section>

      <section>
        <h3>The Team</h3>
        <div className={css.teams}>
          <TeamMember
            src="/assets/avatar.png"
            name="Michel Dumas"
            role="Founder"
          />
          <TeamMember
            src="/assets/avatar.png"
            name="Michel Dumas"
            role="Founder"
          />
        </div>
      </section>

      <img src="/assets/footer_trees.png" alt="lot of trees" />
      <Particles />
    </>
  );
}
