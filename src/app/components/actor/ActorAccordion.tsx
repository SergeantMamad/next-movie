import { Accordion, AccordionItem, Button } from "@nextui-org/react"
import { useState } from "react"
import ResultComponent from "../search/ResultComponent"
import { operations } from "../../../../schema"
import { sortByDate } from "@/app/utils/functions/sortFunctions"
import { customcn } from "@/app/utils/functions/customcn"

type ActorAccordionProps = {
  credits: operations["person-combined-credits"]["responses"]["200"]["content"]["application/json"]
  defaultPagination: number
  isInModal: boolean
}

const ActorAccordion = ({
  credits,
  defaultPagination,
  isInModal,
}: ActorAccordionProps) => {
  type VisibleItemsCount = {
    [key: string]: number
  }
  const [visibleItemsCount, setVisibleItemsCount] = useState<VisibleItemsCount>(
    {
      Acting: defaultPagination,
      Production: defaultPagination,
      Crew: defaultPagination,
      Editing: defaultPagination,
      "Costume & Make-Up": defaultPagination,
      Actors: defaultPagination,
      Directing: defaultPagination,
      Art: defaultPagination,
      Sound: defaultPagination,
      "Visual Effects": defaultPagination,
      Camera: defaultPagination,
      Writing: defaultPagination,
      Lighting: defaultPagination,
    }
  )
  const deparments = new Set<string>()
  credits?.crew?.forEach((job) => deparments.add(job.department!))
  const accordionItems = Array.from(deparments).map((department, index) => (
    <AccordionItem
      title={department}
      key={index}
      classNames={{
        title: customcn("font-semibold", isInModal && "text-lg"),
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-x-hidden">
        {credits.crew
          ?.filter((work) => work.department === department)
          .splice(0, visibleItemsCount[department])
          .map((work, index) => (
            <ResultComponent
              id={work.id}
              mediaType={work.media_type!}
              posterPath={work.poster_path!}
              title={work.title! || (work as any).name}
              voteAverage={work.vote_average}
              releaseDate={work.release_date}
              firstAirDate={(work as any).first_air_date}
              genres={work.genre_ids!}
              isInSearch={false}
              job={work!.job}
              key={index}
            />
          ))}
        {isInModal == true ||
          ((credits.crew?.filter((work) => work.department === department)
            .length as any) >= visibleItemsCount[department] && (
            <Button
              className="col-span-1 md:col-span-2 xl:col-span-3 mt-3"
              variant="bordered"
              radius="sm"
              color="primary"
              fullWidth={true}
              onClick={() => {
                console.log(department)
                setVisibleItemsCount((prevCount) => ({
                  ...prevCount,
                  [department]: prevCount[department] + 6,
                }))
              }}
            >
              Show More
            </Button>
          ))}
      </div>
    </AccordionItem>
  ))
  if (credits.cast?.length !== 0) {
    accordionItems.push(
      <AccordionItem
        title="Acting"
        classNames={{
          title: customcn("font-semibold", isInModal && "text-lg"),
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-x-hidden">
          {credits.cast
            ?.sort((a, b) => sortByDate(a as any, b as any))
            .slice(0, visibleItemsCount["Acting"])
            .map((cast, index) => (
              <ResultComponent
                id={cast.id}
                mediaType={cast.media_type!}
                posterPath={cast.poster_path!}
                title={cast.title! || (cast as any).name}
                voteAverage={cast.vote_average}
                releaseDate={cast.release_date}
                firstAirDate={(cast as any).first_air_date}
                genres={cast.genre_ids!}
                isInSearch={false}
                job={cast!.character}
                key={index}
              />
            ))}
          {isInModal == true ||
            ((credits.cast?.length as any) >= visibleItemsCount["Acting"] && (
              <Button
                className="col-span-1 md:col-span-2 xl:col-span-3 mt-3"
                variant="bordered"
                radius="sm"
                color="primary"
                fullWidth={true}
                onClick={() =>
                  setVisibleItemsCount((prevCount) => ({
                    ...prevCount,
                    Acting: prevCount["Acting"] + 6,
                  }))
                }
              >
                Show More
              </Button>
            ))}
        </div>
      </AccordionItem>
    )
  }
  return <Accordion selectionMode="multiple">{accordionItems}</Accordion>
}
export default ActorAccordion
