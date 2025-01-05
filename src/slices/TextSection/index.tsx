import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";
import styles from "./index.module.css";

/**
 * Props for `ArticleSection`.
 */
export type ArticleSectionProps =
  SliceComponentProps<Content.ArticleSectionSlice>;

/**
 * Component for "ArticleSection" Slices.
 */
const ArticleSection = ({ slice }: ArticleSectionProps): JSX.Element => {
  return (
    <section
      className={styles.section}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.content} />
      <div className={styles.placeholder}>
        Placeholder component for article_section (variation: {slice.variation})
        Slices
      </div>
    </section>
  );
};

export default ArticleSection;
