import React from "react"
import { MaxWidthContext, useFullWidthSizes } from "./useFullWidthSizes"

const PrintSizes = () => {
  const sizes = useFullWidthSizes()

  return <pre>{JSON.stringify(sizes, null, 2)}</pre>
}

export const SizesInFullWidthContainer = () => (
  <>
    In full width container:
    <PrintSizes />
  </>
)

export const SizesIn800pxContainer = () => {
  return (
    <>
      In 800px container:
      <MaxWidthContext.Provider value={800}>
        <PrintSizes />
      </MaxWidthContext.Provider>
    </>
  )
}
