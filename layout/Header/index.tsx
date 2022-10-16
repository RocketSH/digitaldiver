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
        <li className={styles.items}>
        <Link href="/">Home</Link>
        </li>
        <li className={styles.items}>
        <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.items}>
        <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.items}>
        <Link href="/resume.pdf"><a className={clsx("button")} target="_blank">Resume</a>
        </Link>

        </li>
      </div>
    </header>
  );
};

export default Header;
