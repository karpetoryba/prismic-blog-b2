import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

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
      className="flex flex-col items-center text-center py-12 bg-gray-50"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="text-4xl font-extrabold text-black mb-6 uppercase">
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          "Default Title"
        )}
      </h2>
      {slice.primary.image && (
        <div className="w-24 h-24 mb-6">
          <PrismicNextImage
            field={slice.primary.image}
            className="rounded-full object-cover w-full h-full border border-gray-300"
            alt={slice.primary.image.alt || "Default Alt Text"}
          />
        </div>
      )}
      <p className="text-gray-600 text-base leading-relaxed max-w-md">
        {slice.primary.description || "Default description"}
      </p>
    </section>
  );
};

export default AboutMeSlice;
