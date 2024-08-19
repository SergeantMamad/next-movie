"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ActorModal from "../modals/ActorModal"
import { useDisclosure } from "@nextui-org/react"

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
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div className="flex items-center gap-3 min-w-[500px]">
      <div className="w-[90px] h-[90px] rounded-full relative">
        <Image
          onClick={onOpen}
          src={`${
            profilePath
              ? `https://image.tmdb.org/t/p/original${profilePath}`
              : "/images/personUnknown.png"
          }`}
          fill
          className="rounded-full object-cover bg-black"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-white font-semibold text-lg w-full">{name}</h1>
        <div className="text-gray-500 font-semibold text-xs flex w-max">
          {character ||
            roles?.map((character, index) => (
              <p key={index}>{character.character}</p>
            ))}
        </div>
      </div>
      <ActorModal id={id} isOpen={isOpen} onOpenChange={onOpenChange}  />
    </div>
  )
}
export default CastsCard
