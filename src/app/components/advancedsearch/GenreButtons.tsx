import { filter } from "@/app/advancedsearch/[category]/page"
import { customcn } from "@/app/utils/functions/customcn"
type GenreButtons = {
  filter: filter
  setFilter: React.Dispatch<React.SetStateAction<filter>>
  genre: {
    id: number
    name: string
  }
}
function handleGenres(prevValues: string[], currnetValue: string) {
  if (prevValues.find((prevValue) => prevValue == currnetValue)) {
    return prevValues.filter((prevValue) => prevValue != currnetValue)
  } else {
    return [...prevValues, currnetValue]
  }
}
const GenreButtons = ({ filter, setFilter, genre }: GenreButtons) => {
  return (
    <button
      className={customcn(
        "mr-2 text-sm border border-stone-900 p-2 bg-stone-900 mt-2 rounded-2xl transition-all duration-200",
        filter.genres.find((thisGenre) => thisGenre == genre.id.toString()) &&
          "bg-green-600"
      )}
      onClick={() => {
        setFilter((prevFilter) => ({
          ...prevFilter,
          genres: handleGenres(prevFilter.genres, genre.id.toString()),
        }))
      }}
    >
      {genre.name}
    </button>
  )
}
export default GenreButtons
