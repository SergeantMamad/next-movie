import Link from "next/link"
import CustomH1 from "./CustomH1"

type ShowMoreSectionProps = {
    title:string
    href:string
}

const ShowMoreSection = ({title,href}:ShowMoreSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-6 gap-3 w-full">
      <CustomH1 title={title} />
      <Link href={href} className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 justify-center md:mt-20">
        Show More
      </Link>
    </div>
  )
}
export default ShowMoreSection
