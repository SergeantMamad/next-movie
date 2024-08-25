import { filter } from "@/app/advancedsearch/[category]/page"
import { floatinReg, numberReg } from "@/app/utils/configs/regex"
import { parseDate } from "@internationalized/date"
import { DatePicker } from "@nextui-org/react"

type NumberField =
  | "ratings"
  | "runtime"
  | "voteCount"
  | "releaseDate"

type NumberInputs = {
  filter: filter
  numberField: NumberField
  setFilter: React.Dispatch<React.SetStateAction<filter>>
  minPlaceHolder?: string
  maxPlaceHolder?: string
}
const NumberBetweenInputs = ({
  filter,
  numberField,
  setFilter,
  minPlaceHolder,
  maxPlaceHolder,
}: NumberInputs) => {
  function handleNumberInputsChange(
    type: NumberField,
    e: React.FormEvent<HTMLInputElement>,
  ) {
    if (type != "ratings") {
      if (numberReg.test((e.target as HTMLInputElement).value) == false) {
        return ((e.target as HTMLInputElement).value = (
          e.target as HTMLInputElement
        ).value.substring(0, (e.target as HTMLInputElement).value.length - 1))
      } else {
        return (e.target as HTMLInputElement).value
      }
    } else {
      if (floatinReg.test((e.target as HTMLInputElement).value) == false) {
        return ((e.target as HTMLInputElement).value = (
          e.target as HTMLInputElement
        ).value.substring(0, (e.target as HTMLInputElement).value.length - 1))
      } else {
        const value = parseFloat((e.target as HTMLInputElement).value)
        if(value<0 || value > 10) {
          return 10
        }
        return value
      }
    }
  }
  return (
    <div className="flex justify-around items-center gap-3">
      {numberField != "releaseDate" ? (
        <>
          <input
            value={filter[numberField][0] || ""}
            onInput={(e) => {
              setFilter((prevFilter) => ({
                ...prevFilter,
                [numberField]: [
                  handleNumberInputsChange(numberField, e),
                  prevFilter[numberField][1],
                ],
              }))
            }}
            placeholder={minPlaceHolder}
            className="px-3 p-1 rounded-xl text-sm outline-none bg-default-100 border border-[#353535] placeholder-foreground-500 transition-all focus:border-stone-600 w-full h-[40px]"
          />
          <p>TO</p>
          <input
            value={filter[numberField][1] || ""}
            onInput={(e) => {
              setFilter((prevFilter) => ({
                ...prevFilter,
                [numberField]: [
                  prevFilter[numberField][0],
                  handleNumberInputsChange(numberField, e),
                ],
              }))
            }}
            placeholder={maxPlaceHolder}
            className="px-3 p-1 rounded-xl text-sm outline-none bg-default-100 border border-[#353535] placeholder-foreground-500 transition-all focus:border-stone-600 w-full h-[40px]"
          />
        </>
      ) : (
        <>
          <DatePicker
            label="From Date"
            size="sm"
            showMonthAndYearPickers={true}
            value={
              filter[numberField][0] ? parseDate(filter[numberField][0]) : null
            }
            maxValue={
              filter[numberField][1]
                ? parseDate(filter[numberField][1])
                : undefined
            }
            onChange={(e) =>
              setFilter((prevFilter) => ({
                ...prevFilter,
                [numberField]: [e ? e.toString() : undefined!, prevFilter[numberField][1]],
              }))
            }
          />
          <p className="hidden">TO</p>
          <DatePicker
            label="To Date"
            size="sm"
            showMonthAndYearPickers={true}
            minValue={
              filter[numberField][0]
                ? parseDate(filter[numberField][0])
                : undefined
            }
            value={
              filter[numberField][1] ? parseDate(filter[numberField][1]) : null
            }
            onChange={(e) =>
              setFilter((prevFilter) => ({
                ...prevFilter,
                [numberField]: [prevFilter[numberField][0], e ? e.toString() : undefined!],
              }))
            }
          />
        </>
      )}
    </div>
  )
}
export default NumberBetweenInputs
