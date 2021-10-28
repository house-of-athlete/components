export {
  FullWidthSanityImage,
  ImgLoadingContext,
  SanityImage,
} from "./sanity_image"

export { sanityImageUrl } from "./sanityUtil"

export const imageProjection = `{
  _id,
  _type,
  metadata {
    dimensions,
    palette {
      dominant
    },
  },
  url,
}`.replace(/\n/g, "")
