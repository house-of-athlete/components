import React from "react"
import { render } from "@testing-library/react"
import { Basic4ColumnGrid } from "./responsive_grid.composition"

it("should render Basic4ColumnGrid without error", () => {
  render(<Basic4ColumnGrid />)
})
