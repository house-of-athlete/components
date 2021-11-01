import React from "react"
import { CMSLink } from "./cms_link"
import styled from "@emotion/styled"

const RedCMSLink = styled(CMSLink)`
  &,
  &:visited,
  &:hover,
  &:active {
    color: red;
  }
`

export const RedExternalLink = () => (
  <RedCMSLink link={{ _type: "externalLink", url: "http://example.com" }}>
    External Link
  </RedCMSLink>
)

const BoldLink = styled.a`
  font-weight: bold;
`

export const ExternalLinkWithRenderProps = () => (
  <CMSLink link={{ _type: "externalLink", url: "http://example.com" }}>
    {props => <BoldLink {...props}>Bold External Link</BoldLink>}
  </CMSLink>
)

export const BasicVideoModalLink = () => (
  <CMSLink
    link={{
      _type: "videoModalLink",
      video: {
        _type: "mux.videoAsset",
        data: { aspect_ratio: "1024:473" },
        playbackId: "GM01ihvcrnrjUx02dcVYe26vLDWuWUN00f9dhOGo6Pg00vY",
        thumbTime: 4.621051,
      },
    }}
  >
    Video Link
  </CMSLink>
)
