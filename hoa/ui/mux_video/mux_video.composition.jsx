import React from "react"
import { MuxVideo } from "./mux_video"
import { MuxVideoPlayer } from "./mux_video_player"

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

export const BasicMuxPlayer = () => (
  <MuxVideoPlayer
    video={{
      _type: "mux.videoAsset",
      data: { aspect_ratio: "1024:473" },
      playbackId: "GM01ihvcrnrjUx02dcVYe26vLDWuWUN00f9dhOGo6Pg00vY",
      thumbTime: 4.621051,
    }}
  />
)
