import React from "react"
import { render } from "@testing-library/react"
import { BasicVideoModalLink } from "./video_modal.composition"

it("should render link", () => {
  const { getByText } = render(<BasicVideoModalLink />)
  const rendered = getByText("Click here to open video in modal")
  expect(rendered).toBeTruthy()
})
