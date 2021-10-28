import PropTypes from "prop-types"
import React, { useRef, useState } from "react"
import { MuxVideo } from "@hoa/hoa.ui.mux_video"
import classNames from "classnames"

export const MuxVideoPlayer = ({ children, video }) => {
  const videoRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative">
      <MuxVideo
        className={classNames("h-auto w-full", {
          "cursor-pointer": !isPlaying,
        })}
        controls={isPlaying}
        onClick={() => {
          videoRef.current.play()

          // Timeout fixes bug where video doesn't play if setIsPlaying is called in same event
          // handler as videoRef.current.play()
          setTimeout(() => {
            setIsPlaying(true)
          }, 0)
        }}
        preload="metadata"
        video={video}
        ref={videoRef}
      />

      {!isPlaying && children}
    </div>
  )
}

MuxVideoPlayer.propTypes = {
  children: PropTypes.node,
  video: PropTypes.object.isRequired,
}
