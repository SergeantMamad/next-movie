"use client";
import { useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
let contents = [];
for (let index = 0; index <= 15; index++) {
  contents.push(
    <div className="min-w-[290px] flex flex-col gap-3" key={index}>
      <div className="w-[290px] h-[180px] relative">
        <Skeleton
          width={290}
          height={180}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
          className="rounded-[14px]"
        />
      </div>
      <Skeleton
        width={290}
        height={20}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <div className="flex gap-2">
        <Skeleton
          width={20}
          height={20}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
        <Skeleton
          width={40}
          height={20}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
      </div>
    </div>
  );
}
const DiscoverMainSkeleton = () => {
  const discoverRef = useRef(null);
  return (
    <div className="relative">
      <button
        className="w-10 h-10 bg-[#55545b] rounded-full absolute -right-4 top-1/4 z-10"
        onClick={() => scrollRight()}
      >
        <ChevronRightIcon className="w-7 h-7 mx-auto text-white" />
      </button>
      <button
        className="w-10 h-10 bg-[#55545b] rounded-full absolute -left-4 top-1/4 z-10"
        onClick={() => scrollLeft()}
      >
        <ChevronLeftIcon className="w-7 h-7 mx-auto text-white" />
      </button>
      <div
        className="flex mt-4 gap-4 overflow-hidden scroll-smooth"
        ref={discoverRef}
      >
        {contents}
      </div>
    </div>
  );
};

export default DiscoverMainSkeleton;
