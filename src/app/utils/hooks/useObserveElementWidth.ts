import { useEffect, useRef, useState } from "react"

export const useObserveElementWidth = <T extends HTMLElement>() => {
  const [width, setWidth] = useState(0)
  const ref = useRef<T>(null)

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(ref.current?.children[0].clientWidth || 0)
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      ref.current && observer.unobserve(ref.current)
    }
  }, [])

  return {
    width,
    ref,
  }
}
