import debounce from "debounce"

const SearchInput = ({
    setSearchInput
}:{
    setSearchInput:React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <input
      onInput={debounce(
        (e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchInput(e.target.value),
        1500
      )}
      className={"w-full h-[30px] p-6 rounded-md outline-none bg-[#08070A] text-lg border border-transparent focus:border-gray-800 visible transition-all duration-1000 mx-auto"}
    />
  )
}
export default SearchInput
