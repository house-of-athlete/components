import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "@emotion/styled"
import { EventLink } from "@hoa/hoa.ui.event_link"
import { CloseButton } from "@hoa/hoa.ui.close_button"
import { MuxVideo } from "@hoa/hoa.ui.mux_video"
import { PreventScrolling } from "@hoa/hoa.ui.prevent_scrolling"

const StyledCloseButton = styled(CloseButton)`
  --hoa-close-button-color: var(--hoa-video-modal-close-button-color, #fff);
`

export const VideoModal = ({ onClose, video }) => (
  <>
    <PreventScrolling />

    <div className="fixed flex flex-col inset-0 justify-center p-6 z-50">
      <div
        className="absolute inset-0"
        onClick={onClose}
        style={{
          backgroundColor: "var(--hoa-video-modal-backdrop-color, black)",
          opacity: "var(--hoa-video-modal-backdrop-opacity, 0.9)",
          zIndex: "-1",
        }}
      />

      <StyledCloseButton
        className="absolute p-2 right-4 top-4 w-4"
        onClick={onClose}
      />

      <MuxVideo autoPlay controls className="max-h-full w-full" video={video} />
    </div>
  </>
)

VideoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired,
}

export const VideoModalLink = ({ children, video }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <EventLink
        onClick={() => {
          setModalOpen(true)
        }}
      >
        {children}
      </EventLink>

      {isModalOpen && (
        <VideoModal
          onClose={() => {
            setModalOpen(false)
          }}
          video={video}
        />
      )}
    </>
  )
}

VideoModalLink.propTypes = {
  children: PropTypes.node,
  video: PropTypes.object.isRequired,
}
