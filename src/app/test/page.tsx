import Image from "next/image"
import { logoFont, pinyon } from "../utils/fonts"

const Page = () => {
  return (
    <div className="relative h-max w-full flex items-center justify-center">
      <div className="relative h-[860px] w-[960px] mt-40">
        <Image
          unoptimized
          src="/images/NewVersion.webp"
          fill
          sizes="100vw"
          alt=""
          className="object-contain brightness-20"
        />
        <div className="w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center drop-shadow-xl drop-shadow-[#00925df6]">
          <div className={`flex w-full text-6xl ${logoFont.className}`}>
            <p className="tracking-widest">NEXT</p>
            <p className="drop-shadow-2xl ml-1">MOVIE</p>
          </div>
          <p
            className={`text-4xl -mt-2 -ml-2 text-[#00925df6] ${pinyon.className}`}
          >
            2nd anniversary
          </p>
        </div>
      </div>
    </div>
  )
}
export default Page
