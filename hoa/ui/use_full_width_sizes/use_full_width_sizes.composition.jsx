import React from "react"
import { MaxWidthContext, useFullWidthSizes } from "./useFullWidthSizes"

const PrintSizes = () => <pre>{useFullWidthSizes()}</pre>

export const SizesInFullWidthContainer = () => <PrintSizes />

export const SizesIn800pxContainer = () => {
  return (
    <MaxWidthContext.Provider value={800}>
      <PrintSizes />
    </MaxWidthContext.Provider>
  )
}
