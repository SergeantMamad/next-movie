import { ToHour } from "@/app/convert"

export function DateDetailConvertor(runtime: number) : string {
  return runtime > 60 ? ToHour(runtime) : runtime + "m"
}
