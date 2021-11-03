import BlockContent from "@sanity/block-content-to-react"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import BlockRenderer from "./serializers/BlockRenderer"
import InternalLinkSerializer from "./serializers/InternalLinkSerializer"
import LinkSerializer from "./serializers/LinkSerializer"
import SmallSerializer from "./serializers/SmallSerializer"
import SocialLinksSerializer from "./serializers/SocialLinksSerializer"
import VideoModalSerializer from "./serializers/VideoModalSerializer"

const serializers = {
  marks: {
    internalLink: InternalLinkSerializer,
    link: LinkSerializer,
    videoModal: VideoModalSerializer,
    small: SmallSerializer,
  },
  types: {
    block: BlockRenderer,
    blockContentSocialLinks: SocialLinksSerializer,
  },
}

export const RichText = ({ blocks, className, sanityConfig }) => {
  return (
    <BlockContent
      blocks={blocks}
      className={className}
      ignoreUnknownTypes={false}
      projectId={sanityConfig.projectId}
      dataset={sanityConfig.dataset}
      serializers={serializers}
    />
  )
}

RichText.propTypes = {
  blocks: PropTypes.array.isRequired,
  className: PropTypes.string,
  sanityConfig: PropTypes.object.isRequired,
}

const Styled = styled.div`
  line-height: 1.5;

  a {
    text-decoration: underline;
  }

  p,
  ul,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul {
    margin: 14px 0;
  }

  ol,
  ul {
    padding-left: 40px;
  }

  ol li {
    list-style-type: decimal;
  }

  ul li {
    list-style-type: disc;
  }

  p:first-of-type,
  ul:first-of-type {
    margin-top: 0;
  }
  p:last-of-type,
  ul:last-of-type {
    margin-bottom: 0;
  }
`

export const StyledRichText = ({ className, ...props }) => (
  <Styled className={className}>
    <RichText {...props} />
  </Styled>
)

StyledRichText.propTypes = {
  className: PropTypes.string,
}
