const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
export function dateConvertor(date: string) {
  return (
    date.split("-")[2] +
    " " +
    monthNames[(date?.split("-")[1] as any) - 1] +
    " " +
    date.split("-")[0]
  )
}
