import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

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
      className="flex flex-col items-center text-center bg-gray-50 py-12 px-6"
    >
      {/* Title */}
      {slice.primary.title && typeof slice.primary.title !== "string" ? (
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-4xl font-extrabold text-black mb-4">
                {children}
              </h1>
            ),
            paragraph: ({ children }) => (
              <p className="text-lg text-gray-700">{children}</p>
            ),
          }}
        />
      ) : (
        <h1 className="text-4xl font-extrabold text-black mb-4">
          {slice.primary.title || "Default Title"}
        </h1>
      )}

      {/* Body Text */}
      {slice.primary.body && (
        <p className="text-gray-600 text-base leading-relaxed max-w-2xl mb-6">
          {slice.primary.body}
        </p>
      )}

      {/* Button */}
      {slice.primary.link && (
        <PrismicNextLink
          field={slice.primary.link}
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-blue-700 transition"
        >
          Subscribe Now
        </PrismicNextLink>
      )}

      {/* Text Block */}
      {slice.primary.text_block &&
      typeof slice.primary.text_block !== "string" ? (
        <PrismicRichText field={slice.primary.text_block} />
      ) : (
        <p className="text-gray-500 text-sm mt-6">
          {slice.primary.text_block || "Additional information"}
        </p>
      )}
    </section>
  );
};

export default SubscriptionMyBlog;
