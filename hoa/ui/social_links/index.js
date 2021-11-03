import { imageProjection } from "@hoa/hoa.ui.sanity_image"

export { SocialLinks } from "./social_links"

export const socialItemProjection = `{
  ...,

  socialNetwork -> {
    "icon": icon.asset ->  ${imageProjection},
    title,
  },
}`
