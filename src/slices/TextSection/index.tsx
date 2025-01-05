import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for article_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ArticleSection;
