import Layout from "@layout";
import Hero from "../components/Hero";
import HeroContainer from "../components/HeroContainer";

const Home = () => {
  return (
    <HeroContainer>
      <Layout>
        <Hero />
      </Layout>
    </HeroContainer>
  );
};

export default Home;
