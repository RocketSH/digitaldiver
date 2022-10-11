import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

// expressions at the top level of a module are only executed once
const blogDir = path.join(process.cwd(), "content/blog");

// expected return value: ["hello-world"]
export const listAllSlugs = async () => {
  const articles = await fs.readdir(blogDir);
  return articles.map((filename) => {
    return filename.replace(".md", "");
  });
};

export const getPostData = async (slug: string) => {
  // use path.join for windows compatibility
  const filepath = path.join(blogDir, `${slug}.md`);
  const buffer = await fs.readFile(filepath);
  return matter(buffer);
};
