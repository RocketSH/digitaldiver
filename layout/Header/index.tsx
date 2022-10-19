import Link from "next/link";
import React from "react";
import styles from "./Header.module.sass";
import clsx from "clsx";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h1>digitaldiver</h1>
        </a>
      </Link>
      <div className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <a href="/resume.pdf" className={clsx(styles.button)} target="_blank">
          <span>Resume</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
