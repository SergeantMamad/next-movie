"use client"
import { useEffect } from "react"

export default function DotPulse() {
  useEffect(() => {
    async function getLoader() {
      const { dotPulse } = await import("ldrs")
      dotPulse.register()
    }
    getLoader()
  }, [])
  return (
    <l-dot-pulse
      size="60"
      color="#ffffff"
    ></l-dot-pulse>
  )
}
