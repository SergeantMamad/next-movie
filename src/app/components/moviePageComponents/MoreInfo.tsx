import { dateConvertor } from "@/app/utils/functions/dateConvertor"
import MoreInfoItems from "./MoreInfoItems"
import { Fragment } from "react"

type MoreInfoProp = {
  budget: number
  revenue: number
  language: string
  productionCompanies: {
    id: number
    logo_path?: string
    name?: string
    origin_country?: string
  }[]
  releaseDate: string
  voteAverage: number
  productionCountries: {
    iso_3166_1?: string
    name?: string
  }[]
}
const MoreInfo = ({
  budget,
  revenue,
  language,
  productionCountries,
  releaseDate,
  voteAverage,
  productionCompanies,
}: MoreInfoProp) => {
  return (
    <div className="grid grid-cols-4 gap-y-7">
      <MoreInfoItems iconTitle="budget" title="Budget">
        {budget.toLocaleString()}
      </MoreInfoItems>
      <MoreInfoItems iconTitle="revenue" title="Revenue">
        {revenue.toLocaleString()} $
      </MoreInfoItems>
      <MoreInfoItems iconTitle="language" title="Original Language">
        {language}
      </MoreInfoItems>
      <MoreInfoItems iconTitle="countries" title="Production Countries">
        {productionCountries.map((country, index) => (
          <Fragment key={index}>
            {country.name} {index != productionCountries.length - 1 && "●"}{" "}
          </Fragment>
        ))}
      </MoreInfoItems>
      <MoreInfoItems iconTitle="release" title="Release Date">
        {dateConvertor(releaseDate)}
      </MoreInfoItems>
      <MoreInfoItems iconTitle="rating" title="Rating">
        {voteAverage + "/10"}
      </MoreInfoItems>
      <MoreInfoItems iconTitle="companies" title="Production Companies">
        {productionCompanies.map((company, index) => (
          <Fragment key={index}>
            {company.name} {index != productionCompanies.length - 1 && "●"}{" "}
          </Fragment>
        ))}
      </MoreInfoItems>
    </div>
  )
}
export default MoreInfo
