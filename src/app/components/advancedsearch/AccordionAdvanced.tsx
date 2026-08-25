import GenreButtons from "./GenreButtons"
import { movieGenre, seriesGenre } from "@/app/utils/configs/genres"
import NumberBetweenInputs from "./NumberBetweenInputs"
import { filter } from "@/app/advancedsearch/[category]/page"
import { countries } from "@/app/utils/configs/countries"
import { Accordion, Avatar, Label, ListBox, Select } from "@heroui/react"
import Image from "next/image"

type AccordionAdvancedProps = {
  filter: filter
  setFilter: React.Dispatch<React.SetStateAction<filter>>
  category: string
}

const AccordionAdvanced = ({
  filter,
  setFilter,
  category
}: AccordionAdvancedProps) => {
  return (
    <div className="sticky w-[450px] h-screen top-3 hidden lg:block">
      <div className="p-2 max-h-screen overflow-scroll my-auto">
        <Accordion hideSeparator defaultExpandedKeys={["1", "6", "7"]}>
          {/* Title */}
          <Accordion.Item id="1">
            <Accordion.Heading>
              <Accordion.Trigger>Title</Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>
                <input
                  value={filter.title}
                  placeholder="Like Interstellar"
                  onInput={(e) => {
                    setFilter((prevFilter) => ({
                      ...prevFilter,
                      title: (e.target as HTMLInputElement).value
                    }))
                  }}
                  className="px-3 p-1 rounded-xl text-sm outline-none bg-default-100 border border-[#353535] placeholder-foreground-500 transition-all focus:border-stone-600 w-full h-[40px]"
                />
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>

          {/* Genres */}
          <Accordion.Item id="2">
            <Accordion.Heading>
              <Accordion.Trigger>Genres</Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>
                <div>
                  {category === "movie"
                    ? movieGenre.map((genre) => (
                        <GenreButtons
                          filter={filter}
                          genre={genre}
                          setFilter={setFilter}
                          key={genre.id}
                        />
                      ))
                    : seriesGenre.map((genre) => (
                        <GenreButtons
                          filter={filter}
                          genre={genre}
                          setFilter={setFilter}
                          key={genre.id}
                        />
                      ))}
                </div>
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>

          {/* Number Of Votes */}
          <Accordion.Item id="3">
            <Accordion.Heading>
              <Accordion.Trigger>Number Of Votes</Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>
                <NumberBetweenInputs
                  filter={filter}
                  numberField="voteCount"
                  setFilter={setFilter}
                  minPlaceHolder="Like 1000"
                  maxPlaceHolder="Like 20000"
                />
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>

          {/* Ratings Average */}
          <Accordion.Item id="4">
            <Accordion.Heading>
              <Accordion.Trigger>Ratings Average</Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>
                <NumberBetweenInputs
                  filter={filter}
                  numberField="ratings"
                  setFilter={setFilter}
                  minPlaceHolder="Like 2.1"
                  maxPlaceHolder="Like 9.6"
                />
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>

          {/* Runtime */}
          <Accordion.Item id="5">
            <Accordion.Heading>
              <Accordion.Trigger>Runtime</Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>
                <NumberBetweenInputs
                  filter={filter}
                  numberField="runtime"
                  setFilter={setFilter}
                  minPlaceHolder="Like 1"
                  maxPlaceHolder="Like 160"
                />
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>

          {/* Release Date */}
          <Accordion.Item id="6">
            <Accordion.Heading>
              <Accordion.Trigger>
                Release Date / First Air Time
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>
                <NumberBetweenInputs
                  filter={filter}
                  numberField="releaseDate"
                  setFilter={setFilter}
                />
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>

          {/* Origin Country */}
          <Accordion.Item id="7">
            <Accordion.Heading>
              <Accordion.Trigger>Origin Country</Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>
                <Select
                  className="max-w-full"
                  selectionMode="multiple"
                  aria-label="Select Country"
                  placeholder="Select A Country"
                  value={filter.country}
                  onChange={(value) =>
                    setFilter((prevFilter) => ({
                      ...prevFilter,
                      country: value as string[]
                    }))
                  }
                >
                  <Select.Trigger>
                    <Select.Value/>
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {countries.map((country) => (
                        <ListBox.Item
                          id={country.iso_3166_1}
                          textValue={country.english_name}
                          key={country.iso_3166_1}
                        >
                          {country.english_name}
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
export default AccordionAdvanced
