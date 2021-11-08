import { imageProjection } from "@hoa/hoa.ui.sanity_image"
import { internalLinkProjection } from "@hoa/hoa.ui.cms_link"

export { Grid } from "./grid"

export const gridProjection = `{
  items[] {
    ...,
    "image": image.asset -> ${imageProjection},
    "link": link[] {
      ...,
      _type == "internalLink" => {
        document -> ${internalLinkProjection},
      }
    }[0],
  },
}`
