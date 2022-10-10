import { GetServerSideProps } from "next";
import { promises as fs } from "fs";
import matter from "gray-matter";

const BlogPage = ({ content, title }: any) => {
  return (
    <>
      <h1>{title}</h1>
      <section>{content}</section>
    </>
  );
};

// controller
// nodejs
export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug;
  const filepath = `./content/blog/${slug}.md`;
  const buffer = await fs.readFile(filepath);
  const asString = buffer.toString();
  const { content, data } = matter(asString);

  return {
    props: {
      slug: slug,
      content: content,
      title: data.title,
    },
  };
};

export default BlogPage;
