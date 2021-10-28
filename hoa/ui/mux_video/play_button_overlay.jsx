import React from "react"
import playIcon from "./play-icon.svg"

export const PlayButtonOverlay = () => (
  <div className="absolute flex items-center inset-0 justify-center pointer-events-none">
    <div
      className="bg-opacity-25 bg-white flex h-32 items-center justify-center w-40"
      style={{ borderRadius: "30px" }}
    >
      <img className="w-6" src={playIcon} />
    </div>
  </div>
)

PlayButtonOverlay.propTypes = {}
