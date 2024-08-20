import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function useRouteToSeason(
  id: number,
  season:string,
  selected?:boolean
) {
  const router = useRouter()
  useEffect(() => {
    if (
      (selected == true && season != "") ||
      season != ""
    ) {
      router.push(`/series/${id}/${season}`)
    } else if (selected == true && season == "") {
      router.replace(`/series/${id}`)
    }
  }, [season,id,router,selected])
}
