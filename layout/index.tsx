import Head from "next/head";
import React from "react";
import styles from "./Layout.module.sass";

interface Props {
  children: React.ReactNode;
  title?: string
}

const PAGE_TITLE = 'digitaldiver.me'

const Layout: React.FC<Props> = ({ title, children }) => {
  return <div className={styles.root}>
    <Head>
      <title>{title? `${title} | ${PAGE_TITLE}` : PAGE_TITLE}</title>
    </Head>
    {children}
    </div>;
};

export default Layout;
