import React from "react"
import { EventLink } from "./event_link"

export const BasicEventLink = () => (
  <EventLink
    onClick={() => {
      alert("✨")
    }}
  >
    Click me
  </EventLink>
)
