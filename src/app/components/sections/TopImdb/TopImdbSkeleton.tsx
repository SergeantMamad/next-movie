"use client"
import { useRef } from "react"
import "react-loading-skeleton/dist/skeleton.css"
import TopImdbSkeletonCart from "./TopImdbSkeletonCart"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
const TopImdbSkeleton = () => {
  return (
    <div className="relative">
      <TopImdbSkeletonCart />
    </div>
  )
}

export default TopImdbSkeleton
