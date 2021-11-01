import React from "react"
import { Modal } from "./modal"

export const BasicModal = () => (
  <Modal
    onClose={() => {
      alert("Close")
    }}
  >
    Content goes here.
  </Modal>
)
