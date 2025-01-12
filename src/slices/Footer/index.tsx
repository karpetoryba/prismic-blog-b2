import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.footer?.length ? (
        slice.primary.footer.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <div>{item.text_block}</div>
          </div>
        ))
      ) : (
        <p>No footer content available.</p>
      )}
    </section>
  );
};

export default Footer;
