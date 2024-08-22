import { TouchEvent, useState } from "react"

interface SwipeInput {
  onSwipedLeft: () => void
  onSwipedRight: () => void
}

interface SwipeOutput {
  onTouchStart: (e: TouchEvent) => void
  onTouchMove: (e: TouchEvent) => void
  onTouchEnd: () => void
}

export default (input: SwipeInput): SwipeOutput => {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const minSwipeDistance = 60

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      input.onSwipedLeft()
    }
    if (isRightSwipe) {
      input.onSwipedRight()
    }
  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }
}
