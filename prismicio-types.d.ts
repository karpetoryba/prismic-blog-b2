// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogPostDocumentDataSlicesSlice = never;

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * post_title field in *Blog Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.post_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  post_title: prismic.RichTextField;

  /**
   * hero_image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.hero_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;

  /**
   * publish_date field in *Blog Post*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.publish_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  publish_date: prismic.DateField;

  /**
   * text field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice> /**
   * Meta Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

type HomeDocumentDataSlicesSlice = SubscriptionMyBlogSlice | AboutMeSliceSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Navigation → NavigationItem*
 */
export interface NavigationDocumentDataNavigationitemItem {
  /**
   * Link field in *Navigation → NavigationItem*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.navigationitem[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

type NavigationDocumentDataSlicesSlice = never;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * NavigationItem field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.navigationitem[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigationitem: prismic.GroupField<
    Simplify<NavigationDocumentDataNavigationitemItem>
  >;

  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

export type AllDocumentTypes =
  | BlogPostDocument
  | HomeDocument
  | NavigationDocument;

/**
 * Primary content in *AboutMeSlice → Default → Primary*
 */
export interface AboutMeSliceSliceDefaultPrimary {
  /**
   * title field in *AboutMeSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me_slice.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * image field in *AboutMeSlice → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me_slice.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * description field in *AboutMeSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me_slice.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for AboutMeSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutMeSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutMeSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutMeSlice*
 */
type AboutMeSliceSliceVariation = AboutMeSliceSliceDefault;

/**
 * AboutMeSlice Shared Slice
 *
 * - **API ID**: `about_me_slice`
 * - **Description**: AboutMeSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutMeSliceSlice = prismic.SharedSlice<
  "about_me_slice",
  AboutMeSliceSliceVariation
>;

/**
 * Primary content in *TextSection → Default → Primary*
 */
export interface ArticleSectionSliceDefaultPrimary {
  /**
   * Content field in *TextSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article_section.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for TextSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ArticleSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextSection*
 */
type ArticleSectionSliceVariation = ArticleSectionSliceDefault;

/**
 * TextSection Shared Slice
 *
 * - **API ID**: `article_section`
 * - **Description**: ArticleSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleSectionSlice = prismic.SharedSlice<
  "article_section",
  ArticleSectionSliceVariation
>;

/**
 * Default variation for Body Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BodySliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Body*
 */
type BodySliceVariation = BodySliceDefault;

/**
 * Body Shared Slice
 *
 * - **API ID**: `body`
 * - **Description**: Body
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BodySlice = prismic.SharedSlice<"body", BodySliceVariation>;

/**
 * Item in *Gallery → Default → Primary → Group*
 */
export interface GallerySliceDefaultPrimaryGroupItem {
  /**
   * Image field in *Gallery → Default → Primary → Group*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.default.primary.group[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Gallery → Default → Primary*
 */
export interface GallerySliceDefaultPrimary {
  /**
   * Group field in *Gallery → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.default.primary.group[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  group: prismic.GroupField<Simplify<GallerySliceDefaultPrimaryGroupItem>>;
}

/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GallerySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Gallery*
 */
type GallerySliceVariation = GallerySliceDefault;

/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlice = prismic.SharedSlice<
  "gallery",
  GallerySliceVariation
>;

/**
 * Primary content in *ImageWithText → Default → Primary*
 */
export interface ImageWithTextSliceDefaultPrimary {
  /**
   * Image field in *ImageWithText → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_with_text.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Description field in *ImageWithText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_with_text.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for ImageWithText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageWithTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageWithTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageWithText*
 */
type ImageWithTextSliceVariation = ImageWithTextSliceDefault;

/**
 * ImageWithText Shared Slice
 *
 * - **API ID**: `image_with_text`
 * - **Description**: ImageWithText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageWithTextSlice = prismic.SharedSlice<
  "image_with_text",
  ImageWithTextSliceVariation
>;

/**
 * Primary content in *SubscriptionMyBlog → Default → Primary*
 */
export interface SubscriptionMyBlogSliceDefaultPrimary {
  /**
   * title field in *SubscriptionMyBlog → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription_my_blog.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * body field in *SubscriptionMyBlog → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription_my_blog.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body: prismic.KeyTextField;

  /**
   * link field in *SubscriptionMyBlog → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription_my_blog.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * text_block field in *SubscriptionMyBlog → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription_my_blog.default.primary.text_block
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text_block: prismic.KeyTextField;
}

/**
 * Default variation for SubscriptionMyBlog Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubscriptionMyBlogSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SubscriptionMyBlogSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SubscriptionMyBlog*
 */
type SubscriptionMyBlogSliceVariation = SubscriptionMyBlogSliceDefault;

/**
 * SubscriptionMyBlog Shared Slice
 *
 * - **API ID**: `subscription_my_blog`
 * - **Description**: SubscriptionMyBlog
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubscriptionMyBlogSlice = prismic.SharedSlice<
  "subscription_my_blog",
  SubscriptionMyBlogSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataNavigationitemItem,
      NavigationDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutMeSliceSlice,
      AboutMeSliceSliceDefaultPrimary,
      AboutMeSliceSliceVariation,
      AboutMeSliceSliceDefault,
      ArticleSectionSlice,
      ArticleSectionSliceDefaultPrimary,
      ArticleSectionSliceVariation,
      ArticleSectionSliceDefault,
      BodySlice,
      BodySliceVariation,
      BodySliceDefault,
      GallerySlice,
      GallerySliceDefaultPrimaryGroupItem,
      GallerySliceDefaultPrimary,
      GallerySliceVariation,
      GallerySliceDefault,
      ImageWithTextSlice,
      ImageWithTextSliceDefaultPrimary,
      ImageWithTextSliceVariation,
      ImageWithTextSliceDefault,
      SubscriptionMyBlogSlice,
      SubscriptionMyBlogSliceDefaultPrimary,
      SubscriptionMyBlogSliceVariation,
      SubscriptionMyBlogSliceDefault,
    };
  }
}
