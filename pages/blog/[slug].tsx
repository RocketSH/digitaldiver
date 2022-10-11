import { GetServerSideProps, GetStaticPaths } from "next";
import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from "rehype-highlight";
import { lowlight } from "lowlight/lib/core.js";
import sass from "highlight.js/lib/languages/scss";

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
  const blogDir = path.join(process.cwd(), "content/blog");
  const articles = await fs.readdir(blogDir);
  return {
    paths: articles.map(filename => {
      return {
        params: {
          slug: filename.replace(".md", "")
        }
      }
    }),
    fallback: false
  }
}

// controller
// nodejs
export const getStaticProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug;
  // use path.join for windows compatibility
  const filepath = path.join(process.cwd(), "content/blog", `${slug}.md`);
  const buffer = await fs.readFile(filepath);
  const { content, data } = matter(buffer)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight]
    }
  })
  return {
    props: {
      slug: slug,
      content: mdxSource,
      title: data.title,
    },
  };
};

export default BlogPage;
