import { PicListProps } from "@/app/components/mainImages/MainImages"
import { useEffect, useState } from "react"

export function useSetPicList(data:any[] | undefined) {
  const [picList, setPicList] = useState<PicListProps>([])
  useEffect(() => {
    if (data) {
      setPicList(
        data.map((pics, index) => ({
          index: index,
          filePath: pics.file_path!,
        }))
      )
    }
  }, [data])
  return [picList,setPicList] as const
}
