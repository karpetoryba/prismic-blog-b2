import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";
import styles from "./index.module.css"; // Import CSS module

/**
 * Props for MyPersonalInfo.
 */
export type MyPersonalInfoProps =
  SliceComponentProps<Content.MyPersonalInfoSlice>;

/**
 * Component for "MyPersonalInfo" Slices.
 */
const MyPersonalInfo = ({ slice }: MyPersonalInfoProps): JSX.Element => {
  return (
    <section
      className={styles.section}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1 className={styles.title}>{slice.primary.title}</h1>
      <PrismicNextImage className={styles.image} field={slice.primary.image} />
      <p className={styles.text}>{slice.primary.text}</p>
      <p className={styles.placeholder}></p>
    </section>
  );
};

export default MyPersonalInfo;
