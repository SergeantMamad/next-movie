"use client"
import { useEffect } from "react"

export default function Zoomies() {
  useEffect(() => {
    async function getLoader() {
      const { zoomies } = await import("ldrs")
      zoomies.register()
    }
    getLoader()
  }, [])
  return (
    <l-zoomies
      size="80"
      stroke="5"
      bg-opacity="0.09"
      speed="1.4"
      color="#00925d"
    ></l-zoomies>
  )
}
