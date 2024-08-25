import Link from "next/link"
import CustomH1 from "./CustomH1"

type ShowMoreSectionProps = {
    title:string
    href:string
}

const ShowMoreSection = ({title,href}:ShowMoreSectionProps) => {
  return (
    <div className="flex justify-between">
      <CustomH1 title={title} />
      <Link href={href} className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
        Show More
      </Link>
    </div>
  )
}
export default ShowMoreSection
