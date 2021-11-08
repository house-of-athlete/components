import React from "react"
import {
  MaxWidthContext,
  SizesContext,
  useFullWidthSizes,
} from "./useFullWidthSizes"

const PrintSizes = () => <pre>{useFullWidthSizes()}</pre>

export const SizesInFullWidthContainer = () => <PrintSizes />

export const SizesIn800pxContainer = () => {
  return (
    <MaxWidthContext.Provider value={800}>
      <PrintSizes />
    </MaxWidthContext.Provider>
  )
}

export const SizesWithProvidedSizes = () => (
  <SizesContext.Provider value="(max-width: 1023px) 33.3336vw, (max-width: 1280px) 25vw, 320px">
    <PrintSizes />
  </SizesContext.Provider>
)
