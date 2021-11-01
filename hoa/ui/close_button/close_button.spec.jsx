import React from "react"
import { render } from "@testing-library/react"
import { BasicCloseButton } from "./close_button.composition"

it("should render with the correct text", () => {
  const { getByText } = render(<BasicCloseButton />)
  const rendered = getByText("hello from CloseButton")
  expect(rendered).toBeTruthy()
})
