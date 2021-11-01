import React from "react"
import { VideoModal, VideoModalLink } from "./video_modal"

export const BasicVideoModal = () => (
  <VideoModal
    onClose={() => {
      alert("Close")
    }}
    video={{
      _type: "mux.videoAsset",
      data: { aspect_ratio: "1024:473" },
      playbackId: "GM01ihvcrnrjUx02dcVYe26vLDWuWUN00f9dhOGo6Pg00vY",
      thumbTime: 4.621051,
    }}
  />
)

export const BasicVideoModalLink = () => (
  <VideoModalLink
    video={{
      _type: "mux.videoAsset",
      data: { aspect_ratio: "1024:473" },
      playbackId: "GM01ihvcrnrjUx02dcVYe26vLDWuWUN00f9dhOGo6Pg00vY",
      thumbTime: 4.621051,
    }}
  >
    Click here to open video in modal
  </VideoModalLink>
)
