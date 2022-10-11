import Link from "next/link";
import React from "react";
import styles from "./Header.module.sass"

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h1>digitaldiver</h1>
        </a>
      </Link>
    </header>
  );
};

export default Header;
