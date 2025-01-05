import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices"; // Using your custom `components`
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./index.module.css";

export default async function BlogPost({
  params,
}: {
  params: { uid: string };
}) {
  const client = createClient();

  // Fetch the blog post by its UID
  const post = await client.getByUID("blog_post", params.uid);

  return (
    <article className={styles.article}>
      {/* Render the post title */}
      <h1 className={styles.title}>
        <PrismicRichText field={post.data.post_title} />
      </h1>

      {/* Display the hero image if available */}
      {post.data.hero_image && (
        <PrismicNextImage
          field={post.data.hero_image}
          className={styles.image}
        />
      )}

      {/* Display the publish date */}
      <p className={styles.date}>Publish date: {post.data.publish_date}</p>

      {/* Render the text field if it exists */}
      {post.data.text && <div className={styles.text}>{post.data.text}</div>}

      {/* Render the SliceZone using the post's slices and the provided components */}
      <SliceZone slices={post.data.slices} components={components} />
    </article>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  // Fetch all blog posts to generate their static paths
  const posts = await client.getAllByType("blog_post");

  // Return an array of UIDs for each post
  return posts.map((post) => ({
    uid: post.uid,
  }));
}
