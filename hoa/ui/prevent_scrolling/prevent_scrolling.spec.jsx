import React from "react"
import { render } from "@testing-library/react"
import { BasicPreventScrolling } from "./prevent_scrolling.composition"

it("should render without error", () => {
  render(<BasicPreventScrolling />)
})
