import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { getAllPostsData } from "@lib/blog";
import { PostData } from "@interfaces";
import Layout from "@layout";
import { BlogItem } from "@components"

interface Props {
  articles: PostData[];
}

const Blog: NextPage<Props> = ({ articles }) => {
  return (
    <Layout pageHeader="Blog">
      {articles.map((article) => {
        return (
          <>
          <BlogItem key={article.slug} article={article} />
          </>
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
export default Blog;
