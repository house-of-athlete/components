import React from "react"
import { FullWidthSanityImage } from "./sanity_image"
import { MaxWidthContext } from "@hoa/hoa.ui.use_full_width_sizes"

const image = {
  _id: "image-25f8378b9852da303afa2fd2c16b4a9f83aa9521-600x550-jpg",
  metadata: {
    dimensions: {
      _type: "sanity.imageDimensions",
      aspectRatio: 1.0909090909090908,
      height: 550,
      width: 600,
    },
    palette: {
      dominant: {
        _type: "sanity.imagePaletteSwatch",
        background: "#7c7d80",
        foreground: "#fff",
        population: 7.01,
        title: "#fff",
      },
    },
  },
  url: "https://cdn.sanity.io/images/xriwku0s/production/25f8378b9852da303afa2fd2c16b4a9f83aa9521-600x550.jpg",
}

export const SanityImageIn600pxContainer = () => (
  <MaxWidthContext.Provider value={600}>
    The <code>sizes</code> prop set such that optimized image will render.
    <div style={{ maxWidth: 600 }}>
      <FullWidthSanityImage image={image} />
    </div>
  </MaxWidthContext.Provider>
)
