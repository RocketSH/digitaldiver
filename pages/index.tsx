import type { NextPage } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getAllPostsData } from "@lib/blog";
import { PostData } from "@interfaces";

interface Props {
  articles: PostData[]
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Menu</h1>
        {/* <pre>{JSON.stringify(articles, null, 2)}</pre> */}
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.slug}>
                <Link href={`/blog/${article.slug}`}>
                  <a>{article.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps: GetServerSideProps = async (context) => {
  const contents = await getAllPostsData();
  return {
    props: {
      articles: contents,
    },
  };
};
export default Home;
