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
      className="flex flex-col items-center text-center py-12 px-4 bg-gradient-to-b from-white to-gray-100 shadow-md rounded-lg"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          "Default Title"
        )}
      </h2>
      {slice.primary.image && (
        <div className="w-20 h-20 mb-4">
          <PrismicNextImage
            field={slice.primary.image}
            className="rounded-full object-cover w-full h-full border-2 border-gray-300 shadow-sm"
            alt={slice.primary.image.alt || "Default Alt Text"}
          />
        </div>
      )}
      <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
        {slice.primary.description || "Default description"}
      </p>
    </section>
  );
};

export default AboutMeSlice;
