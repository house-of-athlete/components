export { SocialLinks } from "./social_links"

export const socialItemProjection = `{
  ...,

  socialNetwork -> {
    "icon": icon.asset ->  ${imageProjection},
    title,
  },
}`
