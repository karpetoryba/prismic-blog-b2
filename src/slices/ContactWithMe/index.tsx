import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `ContactWithMe`.
 */
export type ContactWithMeProps =
  SliceComponentProps<Content.ContactWithMeSlice>;

/**
 * Component for "ContactWithMe" Slices.
 */
const ContactWithMe = ({ slice }: ContactWithMeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.contactme} />
      {slice.primary.text}
      <PrismicNextLink field={slice.primary.link} />
      <PrismicNextImage field={slice.primary.title} />
      Placeholder component for contact_with_me (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ContactWithMe;
