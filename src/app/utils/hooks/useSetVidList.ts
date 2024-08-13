import { VidListProps } from "@/app/components/videos/Videos"
import { useEffect, useState } from "react"

export function useSetVidList(data:any[] | undefined) {
  const [vidList, setVidList] = useState<VidListProps>([])
  useEffect(() => {
    if (data) {
        setVidList(
        data.map((vids, index) => ({
          index: index,
          youtubeKey: vids.key!,
        }))
      )
    }
  }, [data])
  return [vidList, setVidList] as const
}
