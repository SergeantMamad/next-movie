import { useEffect } from "react"

export function useClickOutside(
  ref: React.RefObject<HTMLDivElement | HTMLDialogElement>,
  closeFunction: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("Salam")
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [ref])
}
