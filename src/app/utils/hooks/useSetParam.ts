import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect } from "react"

export function useSetParam(searchParam: string) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  useEffect(() => {
    if (searchParam != "") router.push(`?search=${searchParam}`)
    else {
      params.delete('search')
      router.replace(`${pathname}?${params}`)
    }
  }, [searchParam])
}
