import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
// import pageComponentToReact from "../../lib/pageComponentToReact"
import { CMSLink } from "@hoa/hoa.ui.cms_link"
import { ImageOrVideo } from "@hoa/hoa.ui.image_or_video"

const Styled = styled.div`
  height: ${({ $height }) => $height || "auto"};
  position: relative;
`

const Content = styled.div`
  align-items: ${({ $horizontalFlex }) => $horizontalFlex};
  display: flex;
  flex-direction: column;
  justify-content: ${({ $verticalFlex }) => $verticalFlex};
  padding: 20px;
`

const Overlay = styled(Content)`
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
`

const BackgroundLink = styled(CMSLink)`
  left: 0;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
`

const ContentContainer = styled.div`
  pointer-events: auto;
`

const horizontalFlex = position => {
  switch (position) {
    case "left":
      return "flex-start"

    case "right":
      return "flex-end"

    default:
      return "center"
  }
}

const verticalFlex = position => {
  switch (position) {
    case "bottom":
      return "flex-end"

    case "top":
      return "flex-start"

    default:
      return "center"
  }
}

const renderComponent = pageComponent => {
  // const Component = pageComponentToReact(pageComponent)
  // return <Component {...pageComponent} />

  // FIXME
  return <>Content coming soon</>
}

export const Banner = ({
  backgroundLink,
  content,
  contentPositionHorizontal,
  contentPositionVertical,
  height,
  imageOrVideo,
}) => {
  const ContentWrapper = imageOrVideo ? Overlay : Content

  return (
    <Styled $height={height}>
      {imageOrVideo && <ImageOrVideo fullHeight {...imageOrVideo} />}

      {backgroundLink && <BackgroundLink link={backgroundLink} />}

      {content && (
        <ContentWrapper
          $horizontalFlex={horizontalFlex(contentPositionHorizontal)}
          $verticalFlex={verticalFlex(contentPositionVertical)}
        >
          <ContentContainer>
            {content.map(item => (
              <div key={item._key}>{renderComponent(item)}</div>
            ))}
          </ContentContainer>
        </ContentWrapper>
      )}
    </Styled>
  )
}

Banner.propTypes = {
  backgroundLink: PropTypes.object,
  content: PropTypes.arrayOf(PropTypes.object),
  contentPositionHorizontal: PropTypes.string,
  contentPositionVertical: PropTypes.string,
  height: PropTypes.string,
  imageOrVideo: PropTypes.object,
}
