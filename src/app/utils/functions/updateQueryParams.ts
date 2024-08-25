interface QueryParams {
    [key: string]: string | null;
  }

export function updateQueryParams(newParams:QueryParams) {
  if (typeof window === "undefined") {
    return
  }

  const currentUrl = new URL(window.location.href)
  
  Object.keys(newParams).forEach((key) => {
    if (newParams[key] && newParams[key] != "-") {
      currentUrl.searchParams.set(key, newParams[key])
    } else {
      currentUrl.searchParams.delete(key)
    }
  })

  window.history.pushState({}, "", currentUrl.toString())
}

