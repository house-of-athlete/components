import React from "react"
import { render } from "@testing-library/react"
import { BasicImageByText } from "./image_by_text.composition"

it("should render without error", () => {
  render(<BasicImageByText />)
})
