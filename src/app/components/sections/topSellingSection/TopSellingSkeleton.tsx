import Skeleton from "react-loading-skeleton"

let contents = []
for (let index = 0; index <= 2; index++) {
  contents.push(
    <div className="w-[32%] h-[350px] relative">
      <Skeleton
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
        className="rounded-[8px]"
      />
    </div>
  )
}
const TopSellingSkeleton = () => {
  return <div className="flex justify-between mt-3">{contents}</div>
}
export default TopSellingSkeleton
