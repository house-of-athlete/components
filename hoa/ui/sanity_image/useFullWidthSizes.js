import { createContext, useContext } from "react"

export const MaxWidthContext = createContext()

export const useFullWidthSizes = () => {
  const maxContainerWidth = useContext(MaxWidthContext)

  return maxContainerWidth
    ? `(max-width: ${maxContainerWidth}px) 100vw, ${maxContainerWidth}px`
    : `100vw`
}
