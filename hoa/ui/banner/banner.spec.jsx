import React from "react"
import { render } from "@testing-library/react"
import { BasicBanner } from "./banner.composition"

it("should render without error", () => {
  render(<BasicBanner />)
})
