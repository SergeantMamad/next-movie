import Skeleton from "react-loading-skeleton"

const UpTopSkeletonCart = () => {
  return (
    <div className="min-w-[310px] flex gap-4">
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
  )
}
export default UpTopSkeletonCart