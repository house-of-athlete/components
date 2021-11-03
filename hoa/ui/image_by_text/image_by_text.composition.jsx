import React from "react"
import { RichTextConfigProvider } from "@hoa/hoa.ui.rich_text"
import { ImageByText } from "./image_by_text"

const props = {
  _key: "5fa4f857a89a",
  _type: "ImageByText",
  content: [
    {
      _key: "ee9405d44c92",
      _type: "block",
      children: [{ _key: "165e9865d714", _type: "span", marks: [], text: "" }],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "5bff1b5082ef",
      _type: "block",
      children: [
        {
          _key: "fffdb530467d",
          _type: "span",
          marks: [],
          text: "Brandon Marshall spent 12 years in the National Football League as one of the top wide receivers in the game. He would spend his career shattering records and collecting countless awards and accolades. Now, just a few years into his retirement Brandon continues to exceed expectations and redefine what it means to be an athlete.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "30b35c1b3e54",
      _type: "block",
      children: [
        {
          _key: "3c12bd077f020",
          _type: "span",
          marks: [],
          text: "As the founder and CEO of House of Athlete, a lifestyle wellness brand giving every athlete, of all levels, access to the top-tier resources necessary to unlock their full potential and train like a pro. Brandon is utilizing his many years of experience with mental and physical health, to build an empire of limitless potential.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "ae5fefb2484a",
      _type: "blockContentSocialLinks",
      markDefs: null,
      socialItems: [
        {
          _key: "c2cb1f06a9e1",
          _type: "socialLink",
          socialNetwork: {
            icon: {
              _id: "image-9174c04286e1fbee4bf26bfd0eabddb6492ad129-24x24-svg",
              _type: "sanity.imageAsset",
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
                    background: "#7c7c7c",
                    foreground: "#fff",
                    population: 1.22,
                    title: "#fff",
                  },
                },
              },
              url: "https://cdn.sanity.io/images/s7bcqajt/production/9174c04286e1fbee4bf26bfd0eabddb6492ad129-24x24.svg",
            },
            title: "Instagram",
          },
          url: "https://www.instagram.com/bmarshall/",
        },
      ],
    },
  ],
  desktopLayout: "imageOnLeft",
  image: {
    _id: "image-40faf5af18b9dc4765cd58d750504c17fbdbf7c6-828x828-jpg",
    _type: "sanity.imageAsset",
    metadata: {
      dimensions: {
        _type: "sanity.imageDimensions",
        aspectRatio: 1,
        height: 828,
        width: 828,
      },
      palette: {
        dominant: {
          _type: "sanity.imagePaletteSwatch",
          background: "#fc9464",
          foreground: "#000",
          population: 58.84,
          title: "#fff",
        },
      },
    },
    url: "https://cdn.sanity.io/images/s7bcqajt/production/40faf5af18b9dc4765cd58d750504c17fbdbf7c6-828x828.jpg",
  },
  imageLink: null,
  title: "About Brandon Marshall",
}

export const BasicImageByText = () => (
  <RichTextConfigProvider
    sanityConfig={{
      dataset: "production",
      projectId: "s7bcqajt",
    }}
  >
    <ImageByText {...props} />
  </RichTextConfigProvider>
)
