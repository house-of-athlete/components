import React from "react"

export const PlayButtonOverlay = () => (
  <div className="absolute flex items-center inset-0 justify-center pointer-events-none">
    <div
      className="bg-opacity-25 bg-white flex h-32 items-center justify-center w-40"
      style={{ borderRadius: "30px" }}
    >
      <svg
        className="w-6"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="30.93000030517578 0 148.1400146484375 210"
        xml:space="preserve"
      >
        <path d="M179.07,105L30.93,210V0L179.07,105z" fill="white" />
      </svg>
    </div>
  </div>
)

PlayButtonOverlay.propTypes = {}
