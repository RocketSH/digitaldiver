import Link from "next/link";
import React from "react";
import styles from "./Header.module.sass";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h1>digitaldiver</h1>
        </a>
      </Link>
      <div className={styles.nav}>
        <div className={styles.items}>
        <Link href="/">Home</Link>
        </div>
        <div className={styles.items}>
        <Link href="/blog">Blog</Link>
        </div>
        <div className={styles.items}>
        <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.items}>
        <Link href="/resume.pdf" className={styles.resume}>Resume</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
