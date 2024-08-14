import { useEffect, useState, MutableRefObject, ForwardedRef } from "react";

const useScrollOverflow = (ref: ForwardedRef<HTMLDivElement>) => {
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const checkOverflow = () => {
    const currentRef = ref as MutableRefObject<HTMLDivElement | null>;
    if (currentRef?.current) {
      const { scrollLeft, scrollWidth, clientWidth } = currentRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkOverflow();
    const currentRef = ref as MutableRefObject<HTMLDivElement | null>;
    if (currentRef?.current) {
      currentRef.current.addEventListener("scroll", checkOverflow);
      window.addEventListener("resize", checkOverflow);
    }

    return () => {
      if (currentRef?.current) {
        currentRef.current.removeEventListener("scroll", checkOverflow);
      }
      window.removeEventListener("resize", checkOverflow);
    };
  }, [ref]);

  return { canScrollLeft, canScrollRight };
};

export default useScrollOverflow;