import React from "react"
import { FullWidthSanityImage } from "@hoa/hoa.ui.sanity_image"
import { ResponsiveGrid } from "./responsive_grid"

const image = {
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
}

const ExampleGrid = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(var(--grid-columns), 1fr)",
    }}
  >
    <FullWidthSanityImage image={image} />
    <FullWidthSanityImage image={image} />
    <FullWidthSanityImage image={image} />
    <FullWidthSanityImage image={image} />
  </div>
)

export const Basic4ColumnGrid = () => (
  <ResponsiveGrid columns={4}>
    <ExampleGrid />
  </ResponsiveGrid>
)
export const Responsive1To4ColumnGrid = () => (
  <ResponsiveGrid columns={1} tabletColumns={2} desktopColumns={4}>
    <ExampleGrid />
  </ResponsiveGrid>
)
