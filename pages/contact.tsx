import Link from "next/link";
import Image from "next/image";
import Layout from "@layout";
import HeroContainer from "../components/HeroContainer";
import styles from "../styles/Contact.module.sass";

const Avatar = () => (
  <div className={styles.img}>
    <Image src="/avatar.png" width={200} height={250} alt="the author avatar" />
  </div>
);

const ContactPage = () => {
  return (
    <HeroContainer>
      <Layout >
        <div className={styles.wrapper}>
          <p>
            Just drop me a line at{" "}
            <Link href="mailto:sh@digitaldiver.me">
              <a>sh@digitaldiver.me</a>
            </Link>{" "}
          </p>
          <Avatar />
        </div>
      </Layout>
    </HeroContainer>
  );
};

export default ContactPage;
