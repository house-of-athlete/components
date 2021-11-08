import React from "react"
import { Grid } from "./grid"

const props = {
  _key: "08b825f9909b",
  _type: "Grid",
  items: [
    {
      _key: "37d2c54f4ccb",
      image: {
        _id: "image-2be9e759a7d96489f288aa69c9c886795052787d-1680x2200-jpg",
        _type: "sanity.imageAsset",
        metadata: {
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 0.7636363636363637,
            height: 2200,
            width: 1680,
          },
          palette: {
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#4f393f",
              foreground: "#fff",
              population: 8.84,
              title: "#fff",
            },
          },
        },
        url: "https://cdn.sanity.io/images/xriwku0s/production/2be9e759a7d96489f288aa69c9c886795052787d-1680x2200.jpg",
      },
      link: {
        _key: "5ef7cd39ccc5",
        _type: "internalLink",
        document: {
          _type: "product",
          link: null,
          path: { _type: "slug", current: "/products/iaa-icon-track-jacket" },
        },
      },
    },
    {
      _key: "5de0470bfa50",
      image: {
        _id: "image-a17fe97d690abccc21e8af6689915bd37ee25e87-5464x8192-jpg",
        _type: "sanity.imageAsset",
        metadata: {
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 0.6669921875,
            height: 8192,
            width: 5464,
          },
          palette: {
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#eaa785",
              foreground: "#000",
              population: 0.63,
              title: "#fff",
            },
          },
        },
        url: "https://cdn.sanity.io/images/xriwku0s/production/a17fe97d690abccc21e8af6689915bd37ee25e87-5464x8192.jpg",
      },
      link: {
        _key: "d872ed080e47",
        _type: "internalLink",
        document: {
          _type: "product",
          link: null,
          path: { _type: "slug", current: "/products/iaa-icon-track-jacket" },
        },
      },
    },
    {
      _key: "19be9069faa0",
      image: {
        _id: "image-9c47c8dc73ccdba1bd669f769222eeb3e65cc2c2-1680x2200-jpg",
        _type: "sanity.imageAsset",
        metadata: {
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 0.7636363636363637,
            height: 2200,
            width: 1680,
          },
          palette: {
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#d0283b",
              foreground: "#fff",
              population: 0.71,
              title: "#fff",
            },
          },
        },
        url: "https://cdn.sanity.io/images/xriwku0s/production/9c47c8dc73ccdba1bd669f769222eeb3e65cc2c2-1680x2200.jpg",
      },
      link: {
        _key: "f809b0d428b4",
        _type: "internalLink",
        document: {
          _type: "product",
          link: null,
          path: { _type: "slug", current: "/products/iaa-logo-track-pant" },
        },
      },
    },
    {
      _key: "1bcd0088e3bf",
      image: {
        _id: "image-8303567715464a752497fbbac8856f10804f6b26-1200x1200-jpg",
        _type: "sanity.imageAsset",
        metadata: {
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 1,
            height: 1200,
            width: 1200,
          },
          palette: {
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#ec393e",
              foreground: "#fff",
              population: 2.05,
              title: "#fff",
            },
          },
        },
        url: "https://cdn.sanity.io/images/xriwku0s/production/8303567715464a752497fbbac8856f10804f6b26-1200x1200.jpg",
      },
      link: {
        _key: "86ff6a42198c",
        _type: "internalLink",
        document: {
          _type: "product",
          link: null,
          path: { _type: "slug", current: "/products/iaa-logo-track-jacket" },
        },
      },
    },
  ],
  phoneColumnCount: 2,
  tabletColumnCount: 4,
  verticalMargins: "gridGap",
}

export const BasicGrid = () => <Grid {...props} />
