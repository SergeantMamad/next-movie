import { StarIcon } from "@heroicons/react/24/solid"

type CartDescriptionType = {
    voteAverage:number
    mediaType:string
}
const CartDescription = ({voteAverage,mediaType}:CartDescriptionType) => {
  return (
    <div className="flex gap-2">
      <div className="flex gap-2">
        <StarIcon className="w-6 h-6 text-yellow-400" />
        <p className="text-white text-sm font-bold mt-auto">
          {voteAverage.toFixed(1)}
        </p>
      </div>
      <p className="font-medium text-gray-500">|</p>
      <div className="mt-1">
        <p className="text-gray-500 font-bold text-xs">{mediaType}</p>
      </div>
    </div>
  )
}
export default CartDescription
