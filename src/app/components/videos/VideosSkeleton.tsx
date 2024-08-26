import { useRef } from "react"
import "react-loading-skeleton/dist/skeleton.css"
import VideoSkeletonCart from "./VideoSkeletonCart"
import ScrollButtons from "../cartGeneral/ScrollButtons"
let contents = []
for (let index = 0; index <= 15; index++) {
  contents.push(<VideoSkeletonCart key={index} />)
}

const VideosSkeleton = () => {
  return (
    <div className="relative flex items-center mt-10">
      <div className="flex overflow-hidden scroll-smooth gap-3">{contents}</div>
    </div>
  )
}

export default VideosSkeleton
