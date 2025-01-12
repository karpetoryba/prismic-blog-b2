import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";
import styles from "./index.module.css";

/**
 * Props for `SubscriptionMyBlog`.
 */
export type SubscriptionMyBlogProps =
  SliceComponentProps<Content.SubscriptionMyBlogSlice>;

/**
 * Component for "SubscriptionMyBlog" Slices.
 */
const SubscriptionMyBlog = ({
  slice,
}: SubscriptionMyBlogProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      {/* Title */}
      {slice.primary.title && typeof slice.primary.title !== "string" ? (
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <h1 className={styles.title}>{children}</h1>
            ),
            paragraph: ({ children }) => (
              <p className={styles.subtitle}>{children}</p>
            ),
          }}
        />
      ) : (
        <h1 className={styles.title}>
          {slice.primary.title || "Default Title"}
        </h1>
      )}

      {/* Body Text */}
      {slice.primary.body && (
        <p className={styles.body}>{slice.primary.body}</p>
      )}

      {/* Button */}
      {slice.primary.link && (
        <PrismicNextLink field={slice.primary.link} className={styles.button}>
          Subscribe Now
        </PrismicNextLink>
      )}

      {/* Text Block */}
      {slice.primary.text_block &&
      typeof slice.primary.text_block !== "string" ? (
        <PrismicRichText
          field={slice.primary.text_block}
          components={{
            paragraph: ({ children }) => (
              <p className={styles.textBlock}>{children}</p>
            ),
          }}
        />
      ) : (
        <p className={styles.textBlock}>
          {slice.primary.text_block || "Additional information"}
        </p>
      )}
    </section>
  );
};

export default SubscriptionMyBlog;
