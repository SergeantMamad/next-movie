"use client"
import Image from "next/image"
import { Fragment } from "react"
import ActorModal from "../modals/ActorModal"
import { useOverlayState } from "@heroui/react"

type CastsCardProps = {
  profilePath: string | undefined
  name: string
  character: string | undefined
  roles: any[] | undefined
  id: number
}

const CastsCard = ({
  profilePath,
  name,
  character,
  id,
  roles,
}: CastsCardProps) => {
  const actorModalState = useOverlayState()
  return (
    <div className="flex items-center gap-3 min-w-[400px] cursor-pointer">
      <div className="min-w-[90px] min-h-[90px] rounded-full relative">
        <Image
          onClick={actorModalState.open}
          src={`${
            profilePath
              ? `https://image.tmdb.org/t/p/original${profilePath}`
              : "/images/personUnknown.png"
          }`}
          fill
          sizes="90px"
          className="rounded-full object-cover bg-black"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-white font-semibold text-lg">{name}</h1>
        <div className="text-gray-500 font-semibold text-xs">
          <p className="line-clamp-1">
            {character ||
              roles?.map((character, index) => (
                <Fragment key={index}>{character.character}</Fragment>
              ))}
          </p>
        </div>
      </div>
      <ActorModal
        id={id}
        isOpen={actorModalState.isOpen}
        onOpenChange={actorModalState.setOpen}
      />
    </div>
  )
}
export default CastsCard
