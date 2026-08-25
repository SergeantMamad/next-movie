import { customcn } from "@/app/utils/functions/customcn"
import { ListBox, Select } from "@heroui/react"

type SelectBoxProps = {
  season: string
  seasons: number[]
  onChange:(value: string) => void
  className?:string
}

const SelectBox = ({ season, seasons, onChange,className }: SelectBoxProps) => {
  return (
    <Select
      className={customcn(`max-w-full lg:max-w-xs absolute top-0 translate-x-1/2 right-1/2 lg:translate-x-0 lg:right-0`,className)}
      aria-label="Select a season"
      placeholder="Select a season"
      onChange={(value) => onChange(String(value))}
      value={season}
    >
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
      {seasons.map((number) => (
        <ListBox.Item key={number} id={String(number)} textValue={`Season ${number}`}>
          Season {number}
        </ListBox.Item>
      ))}
        </ListBox>
      </Select.Popover>
    </Select>
  )
}
export default SelectBox
