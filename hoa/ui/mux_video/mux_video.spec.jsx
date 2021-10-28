import React from "react"
import { render } from "@testing-library/react"
import { BasicMuxVideo } from "./mux_video.composition"

it("should render without error", () => {
  render(<BasicMuxVideo />)
})
