import { filter } from "@/app/advancedsearch/[category]/page"
import {
  sortByItemsMovie,
  sortByItemsTV,
} from "@/app/utils/configs/sortbyItems"
import { ListBox, Select } from "@heroui/react"

const SortItems = ({
  filter,
  setFilter,
  category,
}: {
  filter: filter
  setFilter: React.Dispatch<React.SetStateAction<filter>>
  category: "movie" | "tv"
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Select
        value={filter.sortBy}
        aria-label="Select A Sort Item"
        placeholder="Select A Sort Item"
        className="w-[230px]"
        onChange={(value) =>
          setFilter((prevFilter) => ({
            ...prevFilter,
            sortBy: String(value),
          }))
        }
      >
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
        {category == "movie"
          ? sortByItemsMovie.map((item) => (
              <ListBox.Item key={item.id} id={item.id} textValue={item.name}>{item.name}</ListBox.Item>
            ))
          : sortByItemsTV.map((item) => (
              <ListBox.Item key={item.id} id={item.id} textValue={item.name}>{item.name}</ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
      <p className="text-xs">Default sort is the most popular</p>
    </div>
  )
}
export default SortItems
