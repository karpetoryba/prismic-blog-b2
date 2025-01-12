import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";
import styles from "./index.module.css";

/**
 * Props for `AboutMeSlice`.
 */
export type AboutMeSliceProps = SliceComponentProps<Content.AboutMeSliceSlice>;

/**
 * Component for "AboutMeSlice" Slices.
 */
const AboutMeSlice = ({ slice }: AboutMeSliceProps): JSX.Element => {
  return (
    <section
      className={styles.section}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className={styles.title}>
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          "Default Title"
        )}
      </h2>
      {slice.primary.image && (
        <div className={styles.imageContainer}>
          <PrismicNextImage
            field={slice.primary.image}
            className={styles.image}
            alt={slice.primary.image.alt || "Default Alt Text"}
          />
        </div>
      )}
      <p className={styles.description}>
        {slice.primary.description || "Default description"}
      </p>
    </section>
  );
};

export default AboutMeSlice;
