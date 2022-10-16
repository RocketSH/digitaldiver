import React from "react";
import Link from "next/link";
import { formatDate } from "@lib/dateHelpers";
import { PostData } from "@interfaces";
import styles from "./BlogItem.module.sass";
import Layout from "@layout";

interface Props {
  article: PostData;
}

const BlogItem: React.FC<Props> = ({ article }) => {
  const href = `/blog/${article.slug}`;
  return (
    <Layout>
      <article className={styles.article}>
        <h1 className="page-title">Blog</h1>
        <Link href={href}>
          <a>
            <h3>{article.title}</h3>
          </a>
        </Link>
        <time>{formatDate(article.date)}</time>
        <p>{article.description}</p>
        <Link href={href}>
          <a className={styles.readMore}>Read more...</a>
        </Link>
      </article>
    </Layout>
  );
};

export default BlogItem;
