import React from "react"
import { ImageOrVideo } from "./image_or_video"

const image = {
  _id: "image-9b8be0935f5a45ff1f5d9625e87ff177465c67d1-2595x3700-jpg",
  _type: "sanity.imageAsset",
  metadata: {
    dimensions: {
      _type: "sanity.imageDimensions",
      aspectRatio: 0.7013513513513514,
      height: 3700,
      width: 2595,
    },
    palette: {
      dominant: {
        _type: "sanity.imagePaletteSwatch",
        background: "#aab1b8",
        foreground: "#000",
        population: 6.36,
        title: "#fff",
      },
    },
  },
  url: "https://cdn.sanity.io/images/s7bcqajt/production/9b8be0935f5a45ff1f5d9625e87ff177465c67d1-2595x3700.jpg",
}

export const BasicImageOrVideo = () => <ImageOrVideo image={image} />
