import { imageProjection } from "@hoa/hoa.ui.sanity_image"
import { muxVideoProjection } from "@hoa/hoa.ui.mux_video"

export { ImageOrVideo } from "./image_or_video"

export const imageOrVideoProjection = `{
  "image": image.asset -> ${imageProjection},
  "imagePhone": imagePhone.asset -> ${imageProjection},
  "video": video.asset -> ${muxVideoProjection},
  "videoPhone": videoPhone.asset -> ${muxVideoProjection},
}`
