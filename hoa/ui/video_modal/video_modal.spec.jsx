import React from "react"
import { render } from "@testing-library/react"
import { BasicVideoModal } from "./video_modal.composition"

it("should render with the correct text", () => {
  const { getByText } = render(<BasicVideoModal />)
  const rendered = getByText("hello from VideoModal")
  expect(rendered).toBeTruthy()
})
