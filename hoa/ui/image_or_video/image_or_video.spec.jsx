import React from "react"
import { render } from "@testing-library/react"
import { BasicImageOrVideo } from "./image_or_video.composition"

it("should render without error", () => {
  render(<BasicImageOrVideo />)
})
