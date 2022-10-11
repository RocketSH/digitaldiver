import React from "react";
import styles from "./Footer.module.sass"

const Footer: React.FC = () => {
  return <footer className={styles.footer}>
    <p>&copy; 2022 by <a href="mailto:sh@digitaldiver.me">Shu-Han Hu</a></p>
  </footer>
};

export default Footer;
