import clsx from "clsx";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.sass";

interface Props {
  children: React.ReactNode;
  title?: string;
  pageHeader?: string;
  className?: string;
}

const PAGE_TITLE = "digitaldiver.me";
const description = `Shuhan Hu's Web development learning blog.`;

const Layout: React.FC<Props> = ({
  title,
  children,
  pageHeader,
  className,
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Head>
        <meta name="description" content={description} />
        <link rel="icon" href="/outline_blue.svg"></link>
        <title>{title ? `${title} | ${PAGE_TITLE}` : PAGE_TITLE}</title>
      </Head>
      <Header />
      <main>
        {pageHeader ? (
          <h1 className={styles.pageHeader}>{pageHeader}</h1>
        ) : null}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
