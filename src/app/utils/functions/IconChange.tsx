import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons"
import {
  faBuilding,
  faCalendarWeek,
  faEarthAmericas,
  faLanguage,
  faMoneyBillTrendUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconChange = ({ iconType }: { iconType: string }) => {
  return (
    <div>
      {iconType == "budget" ? (
        <FontAwesomeIcon
          icon={faMoneyBill1}
          size="2x"
          className="border border-[#00925d] rounded-full px-5 py-[23px] text-white"
        />
      ) : iconType == "revenue" ? (
        <FontAwesomeIcon
          size="2x"
          className="border border-[#00925d] rounded-full p-6 text-white"
          icon={faMoneyBillTrendUp}
        />
      ) : iconType == "language" ? (
        <FontAwesomeIcon
          size="2x"
          className="border border-[#00925d] rounded-full px-5 py-[25px] text-white"
          icon={faLanguage}
        />
      ) : iconType == "countries" ? (
        <FontAwesomeIcon
          size="2x"
          className="border border-[#00925d] rounded-full p-6 text-white"
          icon={faEarthAmericas}
        />
      ) : iconType == "release" ? (
        <FontAwesomeIcon
          size="2x"
          className="border border-[#00925d] rounded-full px-6 py-[23px] text-white"
          icon={faCalendarWeek}
        />
      ) : iconType == "rating" ? (
        <FontAwesomeIcon
          size="2x"
          className="border border-[#00925d] rounded-full p-6 py-[27px] text-white"
          icon={faStar}
        />
      ) : iconType == "companies" ? (
        <FontAwesomeIcon
          size="2x"
          className="border border-[#00925d] rounded-full p-8 py-[28px] text-white"
          icon={faBuilding}
        />
      ) : (
        <div></div>
      )}
    </div>
  )
}
export default IconChange
