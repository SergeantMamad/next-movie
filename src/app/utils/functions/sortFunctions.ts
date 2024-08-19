interface HasReleaseDate {
  release_date: string
  first_air_date: string
}

export function sortByDate<T extends HasReleaseDate, K extends HasReleaseDate>(
  a: T,
  b: K
): number {
  const getYear = (dateString?: string): number => {
    return dateString ? parseInt(dateString.split("-")[0], 10) : 0
  }

  const yearA = getYear(a.release_date || a.first_air_date)
  const yearB = getYear(b.release_date || b.first_air_date)

  return yearB - yearA
}
