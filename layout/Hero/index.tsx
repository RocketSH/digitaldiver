import React from "react";
import styles from "./Hero.module.sass";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <h1 className={styles.subtitle}>Hi there, I am &#128512;</h1>
        <h1 className={styles.title}>ShuHan 舒涵</h1>
        <p>I am a Ruby on Rails developer based in Warsaw, Poland.</p>
      </div>
    </section>
  );
};

export default Hero;
