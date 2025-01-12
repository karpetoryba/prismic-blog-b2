import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./index.module.css";

export default async function BlogPost({
  params,
}: {
  params: { uid: string };
}) {
  const client = createClient();

  try {
    const post = await client.getByUID("blog_post", params.uid);

    if (!post) {
      throw new Error(`Post with UID "${params.uid}" not found.`);
    }

    return (
      <article className={styles.article}>
        <h1 className={styles.title}>
          <PrismicRichText field={post.data.post_title} />
        </h1>

        {post.data.hero_image && (
          <PrismicNextImage
            field={post.data.hero_image}
            className={styles.image}
          />
        )}

        <p className={styles.date}>Publish date: {post.data.publish_date}</p>

        {post.data.text && <div className={styles.text}>{post.data.text}</div>}

        <SliceZone slices={post.data.slices} components={components} />
      </article>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return <div>Error loading blog post</div>;
  }
}

export async function generateStaticParams() {
  const client = createClient();
  const posts = await client.getAllByType("blog_post");

  return posts.map((post) => ({
    uid: post.uid,
  }));
}
