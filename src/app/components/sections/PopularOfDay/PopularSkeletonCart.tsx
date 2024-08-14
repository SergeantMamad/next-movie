import { StarIcon } from "@heroicons/react/24/outline"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css";

const PopularSkeletonCart = ({index}:{
    index:number
}) => {
  return (
    <div className="min-w-[310px] relative">
        <div className="min-w-[410px] flex gap-4">
          <p className="my-auto text-white text-4xl font-bold">{index + 1}</p>
          <div className="min-w-[130px] min-h-[170px] w-[130px] h-[170px] relative object-cover">
            <Skeleton
              width={130}
              height={160}
              borderRadius={12}
              baseColor="#7c7c7c"
              highlightColor="#8c8c8c"
            />
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <p className="font-bold text-white">
              <Skeleton baseColor="#7c7c7c" highlightColor="#8c8c8c" />
            </p>
            <div className="flex gap-2">
              <div className="flex gap-2">
                <StarIcon className="w-6 h-6 text-yellow-400" />
                <Skeleton width={20} height={15} baseColor="#7c7c7c" highlightColor="#8c8c8c" />
              </div>
              <p className="font-medium text-gray-500">|</p>
              <div>
                <Skeleton width={34} height={14} baseColor="#7c7c7c" highlightColor="#8c8c8c" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default PopularSkeletonCart