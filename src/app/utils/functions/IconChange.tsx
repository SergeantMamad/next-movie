import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons"
import {
  faBuilding,
  faCalendarWeek,
  faEarthAmericas,
  faLanguage,
  faMoneyBillTrendUp,
  faStar
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconChange = ({ iconType }: { iconType: string }) => {
  return (
    <div className="border border-[#00925d] rounded-full max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] text-white text-2xl flex items-center justify-center">
      {iconType == "budget" ? (
        <FontAwesomeIcon icon={faMoneyBill1} size="2x" />
      ) : iconType == "revenue" ? (
        <FontAwesomeIcon size="2x" icon={faMoneyBillTrendUp} />
      ) : iconType == "language" ? (
        <FontAwesomeIcon size="2x" icon={faLanguage} />
      ) : iconType == "countries" ? (
        <FontAwesomeIcon size="2x" icon={faEarthAmericas} />
      ) : iconType == "release" ? (
        <FontAwesomeIcon size="2x" icon={faCalendarWeek} />
      ) : iconType == "rating" ? (
        <FontAwesomeIcon size="2x" icon={faStar} />
      ) : iconType == "companies" ? (
        <FontAwesomeIcon icon={faBuilding} size="2x" />
      ) : (
        <div></div>
      )}
    </div>
  )
}
export default IconChange
