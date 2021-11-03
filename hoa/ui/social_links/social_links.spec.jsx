import React from "react"
import { render } from "@testing-library/react"
import { BasicSocialLinks } from "./social_links.composition"

it("should render with the correct text", () => {
  const { getByAltText } = render(<BasicSocialLinks />)
  expect(getByAltText("Instagram")).toBeTruthy()
  expect(getByAltText("Twitter")).toBeTruthy()
})
