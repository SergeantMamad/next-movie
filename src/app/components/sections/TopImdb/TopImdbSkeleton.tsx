"use client"
import { useRef } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import TopImdbSkeletonCart from "./TopImdbSkeletonCart";
import ScrollButtons from "../../cartGeneral/ScrollButtons";
let contents = [];
for (let index = 0; index <= 10; index++) {
  contents.push(
    <TopImdbSkeletonCart key={index} />
  );
}
const TopImdbSkeleton = () => {
  const topSelling = useRef(null);
  return (
    <div className="relative">
      <ScrollButtons ref={topSelling} value={310} />
      <div
        className="flex w-[645px] h-[700px] mt-4 overflow-x-hidden scroll-smooth"
        ref={topSelling}
      >
        {contents}
      </div>
    </div>
  );
};

export default TopImdbSkeleton;
