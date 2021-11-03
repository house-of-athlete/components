import React from "react"
import { render } from "@testing-library/react"
import { BasicStyledRichText } from "./rich_text.composition"

it("should render with the correct text", () => {
  const { getByAltText } = render(<BasicStyledRichText />)
  const rendered = getByAltText("Instagram")
  expect(rendered).toBeTruthy()
})
