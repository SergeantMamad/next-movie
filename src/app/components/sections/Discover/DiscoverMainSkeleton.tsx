"use client";
import "react-loading-skeleton/dist/skeleton.css";
import DiscoverMainSkeletonCard from "./DiscoverMainSkeletonCard";
let contents = [];
for (let index = 0; index <= 15; index++) {
  contents.push(
    <DiscoverMainSkeletonCard key={index}/>
  );
}
const DiscoverMainSkeleton = () => {
  return (
    <div className="relative">
      <div
        className="flex mt-4 gap-4 overflow-hidden scroll-smooth"
      >
        {contents}
      </div>
    </div>
  );
};

export default DiscoverMainSkeleton;
