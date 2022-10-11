import { GetServerSideProps, GetStaticPaths, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { processMarkdown } from "@lib/markdown";
import { getPostData, listAllSlugs } from "@lib/blog";
import { PostData } from "@interfaces";
import { formatDate } from "@lib/dateHelpers";
import Layout from "@layout";

interface Props {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  metadata: PostData;
}

const BlogPage: NextPage<Props> = ({ content, metadata }) => {
  return (
    <Layout title={metadata.title}>
      <h1>{metadata.title}</h1>
      <p>{formatDate(metadata.date)}</p>
      <section>
        <MDXRemote {...content} />
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await listAllSlugs();
  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
};

// controller
// nodejs
export const getStaticProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  const { content, data } = await getPostData(slug);
  const mdxSource = await processMarkdown(content);
  return {
    props: {
      content: mdxSource,
      metadata: data,
    },
  };
};

export default BlogPage;
