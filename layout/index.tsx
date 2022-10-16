import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import styles from "./Layout.module.sass";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const PAGE_TITLE = "digitaldiver.me";
const description = `Shuhan Hu's Web development learning blog.`;

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.root}>
      <Head>
        <meta name="description" content={description} />
        <link rel="icon" href="/outline_blue.svg"></link>
        <title>{title ? `${title} | ${PAGE_TITLE}` : PAGE_TITLE}</title>
      </Head>
      <Header />
      <Hero />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
