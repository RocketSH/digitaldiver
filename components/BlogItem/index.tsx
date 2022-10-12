import React from "react";
import { formatDate } from "@lib/dateHelpers";
import { PostData } from "@interfaces";
import styles from "./BlogItem.module.sass";

interface Props {
  article: PostData;
}

const BlogItem: React.FC<Props> = ({ article }) => {
  return (
    <article className={styles.article}>
      <h3>{article.title}</h3>
      <time>{formatDate(article.date)}</time>
      <p>{article.description}</p>
    </article>
  );
};

export default BlogItem;
