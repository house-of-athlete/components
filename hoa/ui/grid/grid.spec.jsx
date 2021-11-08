import React from "react"
import { render } from "@testing-library/react"
import { BasicGrid } from "./grid.composition"
import { CMSLink } from "@hoa/hoa.ui.cms_link"

CMSLink.getInternalLink = document => [
  props => <a {...props} />,
  { href: document.path.current, children: "Internal Link" },
]

it("should render without error", () => {
  render(<BasicGrid />)
})
