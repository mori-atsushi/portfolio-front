import { useEffect } from "react"
import { unregister } from "src/helper/serviceWorker"

export const useClearServiceWorker = () => {
  useEffect(() => {
    unregister()
  }, [])
}
