"use client"
import { faDownload, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FileSaver from "file-saver"
import { useRef } from "react"
import { Tooltip } from "react-tooltip"

type MainImagesTopButton = {
  id: number
  filePath: string
}

const MainImagesTopButton = ({ id, filePath }: MainImagesTopButton) => {
  const shareRef = useRef<HTMLButtonElement>(null)
  function handleShareButtonClick(image_url: string) {
    navigator.clipboard.writeText(image_url)
    if (shareRef.current) {
      shareRef.current.dataset.tooltipContent = "Link Copied"
      setTimeout(() => {
        shareRef.current!.dataset.tooltipContent = "Copy Link"
      }, 3000)
    }
  }

  return (
    <div className="h-[30px] flex gap-2">
      <button
        onClick={() =>
          FileSaver.saveAs(
            `https://image.tmdb.org/t/p/original${filePath}`,
            `${id}+${filePath}`
          )
        }
        data-tooltip-id="download"
        data-tooltip-content="Download Image"
        className="w-[30px] h-[30px] rounded-md hover:cursor-pointer z-[10000] transition-colors border border-white"
      >
        <FontAwesomeIcon className="text-white" icon={faDownload} />
      </button>
      <button
        ref={shareRef}
        data-tooltip-id="share"
        data-tooltip-content="Copy Link"
        className="w-[30px] rounded-md hover:cursor-pointer z-[10000] transition-colors border border-white"
        onClick={() =>
          handleShareButtonClick(
            `https://image.tmdb.org/t/p/original${filePath}`
          )
        }
      >
        <FontAwesomeIcon className="text-white" icon={faShareNodes} />
      </button>
      <Tooltip id="download" place="top" />
      <Tooltip id="share" place="top" />
    </div>
  )
}
export default MainImagesTopButton
