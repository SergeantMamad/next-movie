import { customcn } from "@/app/utils/functions/customcn"
import { useEffect, useRef, useState } from "react"

const Biography = ({
  biography,
  isInModal,
}: {
  biography: string
  isInModal: boolean
}) => {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    setHeight(open ? contentRef?.current?.scrollHeight! : 50)
  }, [open])

  return (
    <div className="w-full h-max">
      <h1
        className={customcn(
          "text-3xl font-bold text-white",
          isInModal && "text-lg"
        )}
      >
        Biography
      </h1>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: `${height}px` }}
        ref={contentRef}
      >
        <p className="whitespace-pre-wrap text-sm text-gray-500 mt-3">
          {open ? biography : biography}
        </p>
      </div>
      <button
        onClick={() => setOpen((prevState) => !prevState)}
        className="text-green-500 mt-2 text-sm"
      >
        {open == false ? "Show More +" : "Show Less -"}
      </button>
      <h1
        className={customcn(
          "text-3xl font-bold text-white mt-5",
          isInModal && "text-lg"
        )}
      >
        Most Famous Works
      </h1>
    </div>
  )
}
export default Biography
