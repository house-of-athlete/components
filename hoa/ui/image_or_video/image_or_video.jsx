import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { MuxVideo } from "@hoa/hoa.ui.mux_video"
import { SanityImage } from "@hoa/hoa.ui.sanity_image"

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
  if (video || videoPhone) {
    return [
      { video: videoPhone, media: phoneMQ },
      { video, media: tabletMQ },
    ].filter(i => i.video)
  }
}

const Styled = styled.div`
  position: relative;

  > video {
    left: 0;
    object-fit: cover;
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

const StyledSanityImage = styled(SanityImage)`
  display: block;
  object-fit: cover;
  width: 100%;
`

const PhoneSanityImage = styled(StyledSanityImage)`
  @media ${tabletMQ} {
    display: none;
  }
`

const TabletSanityImage = styled(StyledSanityImage)`
  @media ${phoneMQ} {
    display: none;
  }
`

export const ImageOrVideo = ({
  fullHeight,
  image,
  imagePhone,
  video,
  videoPhone,
}) => {
  const heightClass = fullHeight ? "h-full" : "h-auto"

  const videoProp = getVideoProp({ video, videoPhone })

  const tabletItem = video || image
  const phoneItem = videoPhone || imagePhone || tabletItem

  return (
    <>
      {videoProp && (
        <Styled
          className={heightClass}
          phoneAR={getAspectRatio(phoneItem)}
          tabletAR={getAspectRatio(tabletItem)}
        >
          <MuxVideo
            className={heightClass}
            autoPlay
            muted
            loop
            playsInline
            video={videoProp}
          />
        </Styled>
      )}

      {/* both phone and tablet images downloaded; could be optimized with <picture> element */}
      {phoneItem._type === "sanity.imageAsset" && (
        <PhoneSanityImage className={heightClass} image={phoneItem} />
      )}

      {tabletItem._type === "sanity.imageAsset" && (
        <TabletSanityImage className={heightClass} image={tabletItem} />
      )}
    </>
  )
}

ImageOrVideo.propTypes = {
  fullHeight: PropTypes.bool,
  image: PropTypes.object,
  imagePhone: PropTypes.object,
  video: PropTypes.object,
  videoPhone: PropTypes.object,
}
