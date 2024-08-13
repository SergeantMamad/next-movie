"use client";
import { useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
let contents = [];
for (let index = 0; index <= 15; index++) {
  contents.push(
    <div className="flex items-center gap-3 min-w-[300px]" key={index}>
      <Skeleton
        width={90}
        height={90}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
        className="rounded-full"
      />
      <div className="flex flex-col gap-3">
        <Skeleton
          width={122}
          height={28}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
        <Skeleton
          width={50}
          height={16}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
      </div>
    </div>
  );
}

const CastsSkeleton = () => {
  const castSkeletonRef = useRef(null);
  function scrollRight() {
    castRef.current.scrollLeft += 325;
  }
  function scrollLeft() {
    castRef.current.scrollLeft -= 325;
  }
  const [disableButton, setDisableButton] = useState("left");
  const handleScroll = () => {
    if (castRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = castRef.current;
      switch (scrollLeft + clientWidth) {
        case clientWidth:
          setDisableButton("left");
          break;
        case scrollWidth:
          setDisableButton("right");
          break;
        default:
          setDisableButton("none");
      }
    }
  };
  return (
    <div className="relative">
      {disableButton != "right" && (
        <button
          className="w-10 h-10 bg-[#55545b] rounded-full absolute -right-4 top-1/4 z-10"
          onClick={() => scrollRight()}
        >
          <ChevronRightIcon className="w-7 h-7 mx-auto text-white" />
        </button>
      )}
      {disableButton != "left" && (
        <button
          className="w-10 h-10 bg-[#55545b] rounded-full absolute -left-4 top-1/4 z-10"
          onClick={() => scrollLeft()}
        >
          <ChevronLeftIcon className="w-7 h-7 mx-auto text-white" />
        </button>
      )}
      <div
        className="flex mt-4 gap-10 overflow-hidden scroll-smooth"
        ref={castSkeletonRef}
        onScroll={handleScroll}
      >
        {contents}
      </div>
    </div>
  );
};

export default CastsSkeleton;
