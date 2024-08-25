type SliderButtonProps = {
  slideN: number
  setSlideN: React.Dispatch<React.SetStateAction<number>>
  index: number
}
const SliderButton = ({ slideN, setSlideN, index }: SliderButtonProps) => {
  return (
    <button
      onClick={() => setSlideN(index)}
      className={`w-3 h-3 rounded-full ${
        slideN == index ? "bg-white" : "bg-[#55545b]"
      }`}
    />
  )
}
export default SliderButton
