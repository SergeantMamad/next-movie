import { filter } from "@/app/advancedsearch/[category]/page"
import {
  sortByItemsMovie,
  sortByItemsTV,
} from "@/app/utils/configs/sortbyItems"
import { Select, SelectItem } from "@nextui-org/react"

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
        selectedKeys={filter.sortBy.split(",")}
        aria-label="Select A Sort Item"
        placeholder="Select A Sort Item"
        className="w-[230px]"
        size="sm"
        onChange={(e) =>
          setFilter((prevFilter) => ({
            ...prevFilter,
            sortBy: e.target.value,
          }))
        }
      >
        {category == "movie"
          ? sortByItemsMovie.map((item) => (
              <SelectItem key={item.id}>{item.name}</SelectItem>
            ))
          : sortByItemsTV.map((item) => (
              <SelectItem key={item.id}>{item.name}</SelectItem>
            ))}
      </Select>
      <p className="text-xs">Default sort is the most popular</p>
    </div>
  )
}
export default SortItems
