import PropTypes from "prop-types"
import React from "react"
import { ExternalLink } from "@hoa/hoa.ui.external_link"
import { isFunction, pick } from "lodash"

const getComponentAndProps = link => {
  switch (link?._type) {
    case "externalLink":
      return [ExternalLink, { href: link.url }]

    case "internalLink":
      if (!isFunction(CMSLink.getInternalLink)) {
        throw new Error(
          `CMSLink.getInternalLink not set; see https://bit.dev/hoa/hoa/ui/cms_link`
        )
      }

      return CMSLink.getInternalLink(link)

    default:
      throw new Error(`unknown link object: ${JSON.stringify(link)}`)
  }
}

/**
 * Dynamically renders either an internal link or external link depending on the `_type` field
 * from Sanity.
 */
export const CMSLink = ({ children, link, isOptional, ...props }) => {
  props = pick(props, ["className", "onClick"])

  if (isFunction(children)) {
    if (!link && isOptional) {
      return children({ ...props, as: "span" })
    } else {
      const [LinkComponent, componentProps] = getComponentAndProps(link)

      return children({ ...props, ...componentProps, as: LinkComponent })
    }
  } else {
    if (!link && isOptional) {
      return <span {...props}>{children}</span>
    } else {
      const [LinkComponent, componentProps] = getComponentAndProps(link)

      return (
        <LinkComponent {...props} {...componentProps}>
          {children}
        </LinkComponent>
      )
    }
  }
}

CMSLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  className: PropTypes.string,
  link: PropTypes.object,
  isOptional: PropTypes.bool,
  onClick: PropTypes.func,
}
