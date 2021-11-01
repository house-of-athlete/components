import PropTypes from "prop-types"
import React, { useState } from "react"
import { EventLink } from "@hoa/hoa.ui.event_link"
import { Modal } from "@hoa/hoa.ui.modal"
import { MuxVideo } from "@hoa/hoa.ui.mux_video"

export const VideoModal = ({ onClose, video }) => (
  <Modal onClose={onClose}>
    <MuxVideo autoPlay controls className="max-h-full w-full" video={video} />
  </Modal>
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
