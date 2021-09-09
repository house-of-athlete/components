import React from "react"
import { render } from "@testing-library/react"
import { CMSLink } from "./cms_link"
import { RedExternalLink } from "./cms_link.composition"

CMSLink.getInternalLink = link => [
  props => <a {...props} />,
  { href: link.document.path.current, children: "Internal Link" },
]

it("should render CMSLink with internal link", () => {
  const { getByText } = render(
    <CMSLink
      link={{
        _key: "d3d49d559627",
        _type: "internalLink",
        document: {
          _type: "collection",
          path: { _type: "slug", current: "/apparel" },
        },
      }}
    >
      Internal Link
    </CMSLink>
  )
  const rendered = getByText("Internal Link")

  expect(rendered).toBeTruthy()
  expect(rendered.tagName).toEqual("A")
  expect(rendered.href).toEqual("http://localhost/apparel")
  expect(rendered.rel).toEqual("")
  expect(rendered.target).toEqual("")
})

it("should render optional link", () => {
  const { getByText } = render(<CMSLink isOptional>Optional Link</CMSLink>)
  const rendered = getByText("Optional Link")

  expect(rendered).toBeTruthy()
  expect(rendered.tagName).toEqual("SPAN")
  expect(rendered.href).toBeUndefined()
})

it("should render RedExternalLink", () => {
  const { getByText } = render(<RedExternalLink />)
  const rendered = getByText("External Link")

  expect(rendered).toBeTruthy()
  expect(rendered.tagName).toEqual("A")
  expect(rendered.href).toEqual("http://example.com/")
  expect(rendered.rel).toEqual("noopener noreferrer")
  expect(rendered.target).toEqual("_blank")
})
