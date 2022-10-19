import type { NextPage } from "next";
import Layout from "@layout";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.sass"

const Home = () => {
  return (
    <Layout className={styles.layout}>
      <Hero />
    </Layout>
  );
};

export default Home;
