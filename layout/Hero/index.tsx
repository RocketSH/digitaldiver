import React from "react";
import styles from "./Hero.module.sass";

const Hero: React.FC = () => {
return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <h1 className={styles.subtitle}>Hi there, I am</h1>
        <h1 className={styles.title}>ShuHan 舒涵</h1>
        <div />
      </div>
    </section>
  );
};

export default Hero;
