"use client";
import { useRef } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import ScrollButtons from "../../cartGeneral/ScrollButtons";
import DiscoverMainSkeletonCard from "./DiscoverMainSkeletonCard";
let contents = [];
for (let index = 0; index <= 15; index++) {
  contents.push(
    <DiscoverMainSkeletonCard key={index}/>
  );
}
const DiscoverMainSkeleton = () => {
  const discoverRef = useRef(null);
  return (
    <div className="relative">
      <ScrollButtons ref={discoverRef} value={310} />
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
