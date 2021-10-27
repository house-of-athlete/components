import React from "react"
import { render } from "@testing-library/react"
import {
  SizesInFullWidthContainer,
  SizesIn800pxContainer,
} from "./use_full_width_sizes.composition"

it("renders SizesInFullWidthContainer", () => {
  const { baseElement } = render(<SizesInFullWidthContainer />)

  expect(baseElement.querySelector("pre").innerHTML).toEqual("100vw")
})

it("renders SizesIn800pxContainer", () => {
  const { baseElement } = render(<SizesIn800pxContainer />)

  expect(baseElement.querySelector("pre").innerHTML).toEqual(
    "(max-width: 800px) 100vw, 800px"
  )
})
