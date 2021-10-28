export { MuxVideo } from "./mux_video"
export { MuxVideoPlayer } from "./mux_video_player"

export const muxVideoProjection = `{
  _type,
  data { aspect_ratio },
  playbackId,
  thumbTime,
}`
