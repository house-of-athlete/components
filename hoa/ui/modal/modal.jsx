import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { CloseButton } from "@hoa/hoa.ui.close_button"
import { PreventScrolling } from "@hoa/hoa.ui.prevent_scrolling"

const StyledCloseButton = styled(CloseButton)`
  --hoa-close-button-color: var(--hoa-modal-close-button-color, #fff);
`

export const Modal = ({ children, onClose }) => (
  <>
    <PreventScrolling />

    <div className="fixed flex flex-col inset-0 justify-center p-6 z-50">
      <div
        className="absolute inset-0"
        onClick={onClose}
        style={{
          backgroundColor: "var(--hoa-modal-backdrop-color, black)",
          opacity: "var(--hoa-modal-backdrop-opacity, 0.9)",
          zIndex: "-1",
        }}
      />

      <StyledCloseButton
        className="absolute p-2 right-4 top-4 w-4"
        onClick={onClose}
      />
      {children}
    </div>
  </>
)

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}
