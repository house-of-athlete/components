import React from "react"
import { render } from "@testing-library/react"
import { BasicSocialLinks } from "./social_links.composition"

it("should render with the correct text", () => {
  const { getByText } = render(<BasicSocialLinks />)
  const rendered = getByText("hello from SocialLinks")
  expect(rendered).toBeTruthy()
})
