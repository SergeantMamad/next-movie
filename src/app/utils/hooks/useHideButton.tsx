import { useEffect, useRef, useState,useCallback } from "react"

export function useHideButton(dep: unknown, timer: number) {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const click = useCallback(() => {
    setIsButtonVisible(true)
    timerRef.current = setTimeout(() => {
      setIsButtonVisible(false)
    }, timer)
  },[timer])
  useEffect(() => {
    click()
    return () => clearTimeout(timerRef.current!)
  }, [dep,click])

  return { isButtonVisible, click }
}
