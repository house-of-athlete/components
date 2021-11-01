import React from "react"
import { CloseButton } from "@hoa/hoa.ui.close_button"
import { PreventScrolling } from "@hoa/hoa.ui.prevent_scrolling"

export const Modal = ({ children, onClose }) => (
  <>
    <PreventScrolling />

    <div className="fixed flex flex-col inset-0 justify-center p-6 z-50">
      <div
        className="absolute bg-black bg-opacity-90 inset-0 -z-1"
        onClick={onClose}
      />

      <CloseButton
        className="absolute p-2 right-4 top-4 w-4"
        onClick={onClose}
      />
      {children}
    </div>
  </>
)
