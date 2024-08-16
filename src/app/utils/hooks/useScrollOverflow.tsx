import { useEffect, useState, MutableRefObject, ForwardedRef } from "react";

const useScrollOverflow = (ref: ForwardedRef<HTMLDivElement>) => {
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const getRefElement = (): HTMLDivElement | null => {
    if (typeof ref === 'function') {
      return null; // If it's a function, you would normally not use this pattern
    } else if (ref && 'current' in ref) {
      return ref.current;
    }
    return null;
  };

  const checkOverflow = () => {
    const element = getRefElement();
    if (element) {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkOverflow();
    const element = getRefElement();
    if (element) {
      element.addEventListener("scroll", checkOverflow);
      window.addEventListener("resize", checkOverflow);
    }

    return () => {
      const element = getRefElement();
      if (element) {
        element.removeEventListener("scroll", checkOverflow);
      }
      window.removeEventListener("resize", checkOverflow);
    };
  }, [ref]);

  return { canScrollLeft, canScrollRight };
};

export default useScrollOverflow;