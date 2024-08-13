type DirectionType = "left" | "right"
export function scrollLeftRight(
  element: React.ForwardedRef<any>,
  direction: DirectionType,
  value:number
) {
  if (element && typeof element !== "function") {
    if (element) {
      if (direction == "left") {
        return (element.current.scrollLeft += value)
      } else {
        return (element.current.scrollLeft -= value)
      }
    }
  }
}
