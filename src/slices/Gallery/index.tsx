import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="gallery">
        {slice.primary.group?.map((item, index) => (
          <div key={index} className="gallery-item">
            {item.image && <PrismicNextImage field={item.image} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
