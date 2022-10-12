import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { PostData } from "@interfaces";

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

export const getAllPostsData = async () => {
  const slugs = await listAllSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { data } = await getPostData(slug);
      return data as PostData;
    })
  );
  return posts.sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });
};
