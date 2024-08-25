import Image from "next/image"
import Link from "next/link"

const PeopleCard = ({
  id,
  profilePath,
  name,
  knownFor,
}: {
  id: number
  profilePath: string
  name: string
  knownFor: string
}) => {
  return (
    <Link href={`person/${id.toString()}`}>
      <div className="flex flex-col items-center gap-3 min-w-[200px] cursor-pointer">
        <div className="min-w-[180px] min-h-[180px] rounded-full relative">
          <Image
            src={`${
              profilePath
                ? `https://image.tmdb.org/t/p/original${profilePath}`
                : "bg-stone-950 border border-stone-950"
            }`}
            fill
            className="rounded-full object-cover bg-stone-950 border border-stone-950"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-white font-semibold text-lg text-center">
            {name}
          </h1>
          <p className="line-clamp-1 text-center text-xs text-gray-400 font-bold">Known For : {knownFor}</p>
        </div>
      </div>
    </Link>
  )
}
export default PeopleCard
