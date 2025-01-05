import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export default async function Page() {
  const client = createClient();

  // Fetch all articles from Prismic CMS
  const articles = await client.getAllByType("blog_post", {
    orderings: [{ field: "my.blog_post.publish_date", direction: "desc" }], // Sort articles by publish date in descending order
  });

  return (
    <main>
      <h1>My Blog</h1>
      <div className="articles-list">
        {articles.map((article) => (
          <article key={article.id} className="article-card">
            {/* Display the preview image if available */}
            {article.data.hero_image && (
              <PrismicNextImage field={article.data.hero_image} />
            )}
            {/* Display the article title with a link to the full post */}
            <h2>
              <Link href={`/blog/${article.uid}`}>
                <PrismicRichText field={article.data.post_title} />
              </Link>
            </h2>
            <p> {article.data.text}</p>
            {/* Display the publish date */}
            <p>Publish date: {article.data.publish_date}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
