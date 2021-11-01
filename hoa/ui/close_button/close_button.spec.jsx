import React from "react"
import { render } from "@testing-library/react"
import { BasicCloseButton } from "./close_button.composition"

it("should render without error", () => {
  render(<BasicCloseButton />)
})
