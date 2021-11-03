import { muxVideoProjection } from "@hoa/hoa.ui.mux_video"
import { socialItemProjection } from "@hoa/hoa.ui.social_links"
export { RichText } from "./rich_text"

export const blockContentProjection = `{
  ...,

  markDefs[] {
    ...,

    _type == "internalLink" => {
      doc -> ${internalLinkProjection},
    },

    _type == "videoModal" => {
      "video": video.asset -> ${muxVideoProjection},
    },
  },

  _type == "blockContentSocialLinks" => {
    socialItems[] ${socialItemProjection},
  },
}`
