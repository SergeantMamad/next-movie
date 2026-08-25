import debounce from "debounce"

const SearchInput = ({
    searchParam,
    setSearchInput
}:{
    searchParam:string | null,
    setSearchInput:React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <input
      onChange={debounce(
        (e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchInput(e.target.value),
        1500
      )}
      defaultValue={searchParam || ""}
      className={"w-full h-[30px] p-6 rounded-md outline-none bg-[#08070A] text-lg border border-transparent focus:border-gray-800 visible transition-all duration-1000 mx-auto"}
    />
  )
}
export default SearchInput
