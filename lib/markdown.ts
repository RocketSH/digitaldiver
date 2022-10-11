import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from "rehype-highlight";

export const processMarkdown = (content: string) => {
  return serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight]
    }
  })
}
