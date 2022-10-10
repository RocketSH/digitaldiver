import { GetServerSideProps, GetStaticPaths } from "next";
import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";

const BlogPage = ({ content, title }: any) => {
  return (
    <>
      <h1>{title}</h1>
      <section>{content}</section>
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
  return {
    props: {
      slug: slug,
      content: content,
      title: data.title,
    },
  };
};

export default BlogPage;
