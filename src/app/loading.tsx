import localFont from "next/font/local"
import Zoomies from "./components/loader/Zoomies"
const logoFont = localFont({
  src: "../../public/fonts/Corleone.otf",
})


const Loading = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-black z-50 flex flex-col justify-center items-center">
      <Zoomies />
      <div className={`flex text-4xl mt-4 ${logoFont.className}`}>
        <p className="tracking-widest">NEXT</p>
        <p className="drop-shadow-2xl ml-1">MOVIE</p>
      </div>
    </div>
  )
}
export default Loading
