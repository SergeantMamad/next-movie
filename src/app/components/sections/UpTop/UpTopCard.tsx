import Image from "next/image"
import Link from "next/link"
import CartDescription from "../../cartGeneral/CartDescription"

type UpTopCard = {
    id : number
    posterPath:string
    title:string
    voteAverage:number
    mediaType:string
}

const UpTopCard = ({
    id,
    posterPath,
    title,
    voteAverage,
    mediaType
}:UpTopCard) => {
  return (
    <Link href={`movie/${id}`}>
    <div className="min-w-[310px] flex gap-4">
      <div className="min-w-[130px] min-h-[150px] w-[130px] h-[150px] relative object-cover">
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-xl"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <p className="font-bold text-white">{title}</p>
       <CartDescription mediaType={mediaType} voteAverage={voteAverage}/>
      </div>
    </div>
  </Link>
  )
}
export default UpTopCard