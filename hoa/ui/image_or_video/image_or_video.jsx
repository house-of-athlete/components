import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { MuxVideo } from "@hoa/hoa.ui.mux_video"
import { FullWidthSanityImage } from "@hoa/hoa.ui.sanity_image"

const phoneMQ = `(max-width: 767px)`
const tabletMQ = `(min-width: 768px)` // Tailwind "md"

const getAspectRatio = item => {
  switch (item._type) {
    case "sanity.imageAsset":
      return item.metadata.dimensions.aspectRatio

    case "mux.videoAsset": {
      const [w, h] = item.data.aspect_ratio.split(":").map(Number)
      return w / h
    }

    default:
      throw new Error(`unknown item type: ${item._type}`)
  }
}

const getVideoProp = ({ video, videoPhone }) => {
  if (video && !videoPhone) {
    return video
  } else if (video || videoPhone) {
    return [
      { video: videoPhone, media: phoneMQ },
      { video, media: tabletMQ },
    ].filter(i => i.video)
  }
}

const Styled = styled.div`
  position: relative;

  > * {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  @media ${phoneMQ} {
    padding-bottom: ${({ phoneAR }) => 100 / phoneAR}%;
  }

  @media ${tabletMQ} {
    padding-bottom: ${({ tabletAR }) => 100 / tabletAR}%;
  }
`

const PhoneSanityImage = styled(FullWidthSanityImage)`
  @media (min-width: ${props => props.theme.tabletMin}) {
    display: none;
  }
`

const TabletSanityImage = styled(FullWidthSanityImage)`
  @media (max-width: ${props => props.theme.phoneMax}) {
    display: none;
  }
`

const ImageOrVideo = ({ image, imagePhone, video, videoPhone }) => {
  const videoProp = getVideoProp({ video, videoPhone })

  const tabletItem = video || image
  const phoneItem = videoPhone || imagePhone || tabletItem

  return (
    <Styled
      phoneAR={getAspectRatio(phoneItem)}
      tabletAR={getAspectRatio(tabletItem)}
    >
      {videoProp && (
        <MuxVideo autoPlay muted loop playsInline video={videoProp} />
      )}

      {/* both phone and tablet images downloaded; could be optimized with <picture> element */}
      {phoneItem._type === "sanity.imageAsset" && (
        <PhoneSanityImage image={phoneItem} />
      )}

      {tabletItem._type === "sanity.imageAsset" && (
        <TabletSanityImage image={tabletItem} />
      )}
    </Styled>
  )
}

ImageOrVideo.propTypes = {
  image: PropTypes.object,
  imagePhone: PropTypes.object,
  video: PropTypes.object,
  videoPhone: PropTypes.object,
}

export default ImageOrVideo
