import React from "react"
import { CloseButton } from "./close_button"

export const BasicCloseButton = () => (
  <CloseButton
    onClick={() => {
      alert("Close!")
    }}
  />
)
