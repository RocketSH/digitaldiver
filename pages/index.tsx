import type { NextPage } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { getAllPostsData } from "@lib/blog";
import { PostData } from "@interfaces";
import Layout from "@layout";
import { formatDate } from "@lib/dateHelpers";

interface Props {
  articles: PostData[]
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.slug}>
                {formatDate(article.date)}{" "}
                <Link href={`/blog/${article.slug}`}>
                  <a>{article.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
    </Layout>
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
