import React from "react"
import { Banner } from "./banner"

const props = {
  _key: "3a345aeb71ad",
  _type: "Banner",
  backgroundLink: {
    _key: "b4e13c3233d1",
    _type: "externalLink",
    url: "https://houseofathlete.com",
  },
  content: [
    {
      _key: "0e16b91620a9",
      _type: "ButtonRow",
      buttons: [
        {
          _key: "f627f14c5ea1",
          _type: "internalLinkButton",
          doc: {
            _type: "customInternalLink",
            link: "/apparel/collection-2",
            path: null,
          },
          text: "Collection 2",
          theme: "darkOnLight",
        },
      ],
      gridAutoFlowPhone: "row",
    },
  ],
  contentPositionHorizontal: "left",
  contentPositionVertical: "bottom",
  height: "clamp(240px, 90vw, 650px)",
  imageOrVideo: {
    image: {
      _id: "image-84ef78b6306d4be19311159f4c6a74d544bb4dcb-3000x1391-jpg",
      _type: "sanity.imageAsset",
      metadata: {
        dimensions: {
          _type: "sanity.imageDimensions",
          aspectRatio: 2.156721782890007,
          height: 1391,
          width: 3000,
        },
        palette: {
          dominant: {
            _type: "sanity.imagePaletteSwatch",
            background: "#5f4438",
            foreground: "#fff",
            population: 8.01,
            title: "#fff",
          },
        },
      },
      url: "https://cdn.sanity.io/images/xriwku0s/production/84ef78b6306d4be19311159f4c6a74d544bb4dcb-3000x1391.jpg",
    },
    imagePhone: null,
    video: null,
    videoPhone: null,
  },
  verticalMargins: "gridGap",
}

export const BasicBanner = () => <Banner {...props} />
