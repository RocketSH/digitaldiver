import type { NextPage } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { getAllPostsData } from "@lib/blog";
import { PostData } from "@interfaces";
import Layout from "@layout";
import { formatDate } from "@lib/dateHelpers";
import { BlogItem } from "@components"

interface Props {
  articles: PostData[];
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {articles.map((article) => {
          return (
            <BlogItem key={article.slug} article={article} />
          );
        })}
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
