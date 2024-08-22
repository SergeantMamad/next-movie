import { useEffect, useRef, useState, useCallback } from "react"

export function useHideButton(dep: unknown, timer: number) {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isButtonVisible, setIsButtonVisible] = useState(true)
  const [click, setClick] = useState(false)
  useEffect(() => {
    if (click) {
      setIsButtonVisible(true)
      timerRef.current = setTimeout(() => {
        setIsButtonVisible(false)
        setClick(false)
      }, timer)
    }
    return () => clearTimeout(timerRef.current!)
  }, [dep, click])

  return { isButtonVisible, click,setClick }
}
