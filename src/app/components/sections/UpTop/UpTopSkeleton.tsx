"use client";
import { useRef } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import ScrollButtons from "../../cartGeneral/ScrollButtons";
import UpTopSkeletonCart from "./UpTopSkeletonCart";
let contents = [];
for (let index = 0; index <= 11; index++) {
  contents.push(
    <UpTopSkeletonCart key={index} />
  );
}

const UpTopSkeleton = () => {
  const UpTopRef = useRef(null);
  
  return (
    <div className="relative">
      <ScrollButtons ref={UpTopRef} value={312} />
      <div
        className="grid grid-rows-4 gap-8 grid-flow-col w-[312px] mt-4 overflow-x-hidden scroll-smooth grid-test"
        ref={UpTopRef}
      >
        {contents}
      </div>
    </div>
  );
};

export default UpTopSkeleton;
