import React from "react"
import { SocialLinks } from "./social_links"

const instagram = {
  _key: "a172e3219fc1",
  _type: "socialLink",
  socialNetwork: {
    icon: {
      _id: "image-e29754b96f0c743e5def6d269b55fc1771b285ec-24x24-svg",
      metadata: {
        dimensions: {
          _type: "sanity.imageDimensions",
          aspectRatio: 1,
          height: 24,
          width: 24,
        },
        palette: {
          dominant: {
            _type: "sanity.imagePaletteSwatch",
            background: "#040404",
            foreground: "#fff",
            population: 100,
            title: "#fff",
          },
        },
      },
      url: "https://cdn.sanity.io/images/xriwku0s/production/e29754b96f0c743e5def6d269b55fc1771b285ec-24x24.svg",
    },
    title: "Instagram",
  },
  url: "https://www.instagram.com/iamathletepodcast/",
}

const twitter = {
  _key: "4c8fc1e04263",
  _type: "socialLink",
  socialNetwork: {
    icon: {
      _id: "image-165ec9568b6be0931333417a723b7c4dfabbd7fe-24x24-svg",
      metadata: {
        dimensions: {
          _type: "sanity.imageDimensions",
          aspectRatio: 1,
          height: 24,
          width: 24,
        },
        palette: {
          dominant: {
            _type: "sanity.imagePaletteSwatch",
            background: "#040404",
            foreground: "#fff",
            population: 100,
            title: "#fff",
          },
        },
      },
      url: "https://cdn.sanity.io/images/xriwku0s/production/165ec9568b6be0931333417a723b7c4dfabbd7fe-24x24.svg",
    },
    title: "Twitter",
  },
  url: "https://twitter.com/iamathletepod",
}

export const BasicSocialLinks = () => (
  <SocialLinks items={[instagram, twitter]} />
)
