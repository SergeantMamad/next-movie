"use client";
import { useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
let contents = [];
for (let index = 0; index <= 11; index++) {
  contents.push(
    <div className="min-w-[310px] flex gap-4" key={index}>
      <div className="min-w-[130px] min-h-[150px] w-[130px] h-[150px] relative object-cover">
        <Skeleton
          width={130}
          height={150}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
          borderRadius={12}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <Skeleton
          width={120}
          height={24}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
        <Skeleton
          width={116}
          height={24}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
      </div>
    </div>
  );
}

const UpTopSkeleton = () => {
  const UpTopRef = useRef(null);
  function scrollRight() {
    UpTopRef.current.scrollLeft += 325;
  }
  function scrollLeft() {
    UpTopRef.current.scrollLeft -= 325;
  }
  return (
    <div className="relative">
      <div
        className="grid grid-rows-4 gap-8 grid-flow-col w-[312px] mt-4 overflow-x-hidden scroll-smooth grid-test"
        ref={UpTopRef}
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

export default UpTopSkeleton;
