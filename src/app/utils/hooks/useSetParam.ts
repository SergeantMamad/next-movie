import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect } from "react"

export function useSetParam(searchParam: string) {
  const router = useRouter()
  useEffect(() => {
    if(searchParam != "")
    router.push(`?search=${searchParam}`)
    else
    router.replace("")
  },[searchParam])
}
