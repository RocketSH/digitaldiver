import React from "react";
import styles from "./HeroContainer.module.sass";

interface Props {
  children: React.ReactNode;
}

const HeroContainer: React.FC<Props> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default HeroContainer;
