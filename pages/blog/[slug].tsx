import { GetServerSideProps, GetStaticPaths } from "next";
import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { processMarkdown } from "@lib/markdown";
import { getPostData, listAllSlugs } from "@lib/blog";

const BlogPage = ({ content, title }: any) => {
  return (
    <>
      <h1>{title}</h1>
      <section>
        <MDXRemote {...content} />
      </section>
    </>
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
      slug: slug,
      content: mdxSource,
      title: data.title,
    },
  };
};

export default BlogPage;
