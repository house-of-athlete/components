import React from "react"
import { render } from "@testing-library/react"
import { BasicRichText } from "./rich_text.composition"

it("should render with the correct text", () => {
  const { getByText } = render(<BasicRichText />)
  const rendered = getByText("hello from RichText")
  expect(rendered).toBeTruthy()
})
