import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight";
import useScrollOverflow from "@/app/utils/hooks/useScrollOverflow";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ForwardedRef, forwardRef } from "react";

const ScrollButtons = (
  {
    value,
  }: {
    value: number;
  },
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { canScrollLeft, canScrollRight } = useScrollOverflow(ref);

  return (
    <>
      {canScrollRight && (
        <button
          onClick={() => scrollLeftRight(ref, "left", value)}
          className="w-10 h-10 bg-[#55545b] rounded-full absolute z-10 top-1/2 -translate-y-1/2 -right-0"
        >
          <ChevronRightIcon className="w-7 h-7 mx-auto text-white" />
        </button>
      )}
      {canScrollLeft && (
        <button
          onClick={() => scrollLeftRight(ref, "right", value)}
          className="w-10 h-10 bg-[#55545b] rounded-full absolute top-1/2 -translate-y-1/2 -left-5 z-10"
        >
          <ChevronLeftIcon className="w-7 h-7 mx-auto text-white" />
        </button>
      )}
    </>
  );
};

export default forwardRef(ScrollButtons);