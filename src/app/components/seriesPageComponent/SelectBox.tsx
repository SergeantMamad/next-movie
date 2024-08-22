import { customcn } from "@/app/utils/functions/customcn"
import { Select, SelectItem } from "@nextui-org/react"

type SelectBoxProps = {
  season: string
  seasons: number[]
  onChange:(e:React.ChangeEvent<HTMLSelectElement>) => void
  className?:string
}

const SelectBox = ({ season, seasons, onChange,className }: SelectBoxProps) => {
  return (
    <Select
      className={customcn(`max-w-full lg:max-w-xs absolute top-0 translate-x-1/2 right-1/2 lg:translate-x-0 lg:right-0`,className)}
      aria-label="Select a season"
      placeholder="Select a season"
      onChange={onChange}
      selectedKeys={season}
    >
      {seasons.map((number) => (
        <SelectItem key={number} value={number} textValue={`Season ${number}`}>
          Season {number}
        </SelectItem>
      ))}
    </Select>
  )
}
export default SelectBox
