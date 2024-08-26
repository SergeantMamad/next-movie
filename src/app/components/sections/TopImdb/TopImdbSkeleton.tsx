"use client"
import { useRef } from "react"
import "react-loading-skeleton/dist/skeleton.css"
import TopImdbSkeletonCart from "./TopImdbSkeletonCart"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
let contents = []
for (let index = 0; index <= 10; index++) {
  contents.push(<TopImdbSkeletonCart key={index} />)
}
const TopImdbSkeleton = () => {
  const topSelling = useRef(null)
  return (
    <div className="relative">
      <div className="flex max-w-screen xl:w-[540px] h-max mt-4 overflow-x-hidden scroll-smooth">
        {contents}
      </div>
    </div>
  )
}

export default TopImdbSkeleton
