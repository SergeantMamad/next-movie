"use client"
import { useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import debounce from "lodash.debounce";
let contents = [];
for (let index = 0; index <= 10; index++) {
  contents.push(
    <div className="w-[680px] flex flex-col gap-8" key={index}>
      <div className="w-[680px] h-[315px] relative">
        <Skeleton
          width={680}
          height={315}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
      </div>
      <Skeleton
        width={280}
        borderRadius={20}
        height={38}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <Skeleton
        width={340}
        height={48}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <Skeleton
        width={38}
        height={16}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <Skeleton
        width={645}
        height={16}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <Skeleton
        width={645}
        height={16}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <Skeleton
        width={345}
        height={16}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <div className="flex gap-4 bottom-0 mt-auto">
        <Skeleton
          width={145}
          height={46}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
        <Skeleton
          width={145}
          height={46}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
      </div>
    </div>
  );
}
const TopImdbSkeleton = () => {
  const topSelling = useRef(null);
  const scrollRight = debounce(() => {
    topSelling.current.scrollLeft = Math.min(
      topSelling.current.scrollLeft + 680,
      5440
    );
  }, 250);
  const scrollLeft = debounce(() => {
    topSelling.current.scrollLeft -= 680;
  }, 250);
  return (
    <div className="relative">
      <div
        className="flex w-[645px] h-[700px] mt-4 overflow-x-hidden scroll-smooth"
        ref={topSelling}
      >
        <button
          onClick={() => scrollRight()}
          className="w-10 h-10 bg-[#55545b] rounded-full absolute right-0 -top-14 z-10"
        >
          <ChevronRightIcon className="w-7 h-7 mx-auto text-white" />
        </button>
        <button
          onClick={() => scrollLeft()}
          className="w-10 h-10 bg-[#55545b] rounded-full absolute right-16 -top-14 z-10"
        >
          <ChevronLeftIcon className="w-7 h-7 mx-auto text-white" />
        </button>
        {contents}
      </div>
    </div>
  );
};

export default TopImdbSkeleton;
