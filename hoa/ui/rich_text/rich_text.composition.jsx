import React from "react"
import { StyledRichText } from "./rich_text"

const brandonBlocks = [
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
        url: "https://www.instagram.com/bmarshall/",
      },
    ],
  },
]

export const BasicStyledRichText = () => (
  <StyledRichText
    blocks={brandonBlocks}
    sanityConfig={{
      dataset: "production",
      projectId: "s7bcqajt",
    }}
  />
)
