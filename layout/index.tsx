import React from "react";
import styles from "./Layout.module.sass";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Layout;
