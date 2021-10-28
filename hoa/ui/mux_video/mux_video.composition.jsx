import React from "react"
import { MuxVideo } from "./mux_video"

export const BasicMuxVideo = () => (
  <MuxVideo
    style={{ height: "auto", width: "100%" }}
    autoPlay
    muted
    loop
    playsInline
    video={{
      _type: "mux.videoAsset",
      data: { aspect_ratio: "4:5" },
      playbackId: "xxpHrEQMIRfCMkKfD1xJ7yDeUjvlq00NzpUZWa02EgLIs",
      thumbTime: null,
    }}
  />
)
