import {
    Accordion,
    AccordionItem,
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react"
import NumberBetweenInputs from "../advancedsearch/NumberBetweenInputs"
import { movieGenre } from "@/app/utils/configs/genres"
import GenreButtons from "../advancedsearch/GenreButtons"
import { countries } from "@/app/utils/configs/countries"
import { filter } from "@/app/advancedsearch/[category]/page"

const FilterModal = ({
  isOpen,
  onOpenChange,
  filter,
  setFilter
}: {
  isOpen: boolean
  onOpenChange: () => void
  filter:filter
  setFilter:React.Dispatch<React.SetStateAction<filter>>
}) => {
  return (
    <Modal
      isOpen={isOpen}
      placement={"auto"}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Search For Something</ModalHeader>
            <ModalBody>
              <Accordion
                selectionMode="multiple"
                itemClasses={{
                  title: "font-semibold",
                }}
                showDivider={false}
              >
                <AccordionItem key="1" title="Title">
                  <input
                    value={filter.title}
                    placeholder="Like Interstellar"
                    onInput={(e) => {
                      setFilter((prevFilter) => ({
                        ...prevFilter,
                        title: (e.target as HTMLInputElement).value,
                      }))
                    }}
                    className="px-3 p-1 rounded-xl text-sm outline-none bg-default-100 border border-[#353535] placeholder-foreground-500 transition-all focus:border-stone-600 w-full h-[40px]"
                  />
                </AccordionItem>
                <AccordionItem key="2" title="Genres">
                  <div>
                    {movieGenre.map((genre) => (
                      <GenreButtons
                        filter={filter}
                        genre={genre}
                        setFilter={setFilter}
                        key={genre.id}
                      />
                    ))}
                  </div>
                </AccordionItem>
                <AccordionItem key="3" title="Number Of Votes">
                  <NumberBetweenInputs
                    filter={filter}
                    numberField="voteCount"
                    setFilter={setFilter}
                    minPlaceHolder="Like 1000"
                    maxPlaceHolder="Like 20000"
                  />
                </AccordionItem>
                <AccordionItem key="4" title="Ratings Average">
                  <NumberBetweenInputs
                    filter={filter}
                    numberField="ratings"
                    setFilter={setFilter}
                    minPlaceHolder="Like 2.1"
                    maxPlaceHolder="Like 9.6"
                  />
                </AccordionItem>
                <AccordionItem key="5" title="Runtime">
                  <NumberBetweenInputs
                    filter={filter}
                    numberField="runtime"
                    setFilter={setFilter}
                    minPlaceHolder="Like 1"
                    maxPlaceHolder="Like 160"
                  />
                </AccordionItem>
                <AccordionItem key="6" title="Release Date / First Air Time">
                  <NumberBetweenInputs
                    filter={filter}
                    numberField="releaseDate"
                    setFilter={setFilter}
                  />
                </AccordionItem>
                <AccordionItem key="7" title="Origin Country">
                  <Select
                    className="max-w-full bg-[#08070A]"
                    selectionMode="multiple"
                    size="md"
                    aria-label="Select Country"
                    placeholder="Select A Country"
                    selectedKeys={filter.country}
                    onChange={(e) =>
                      setFilter((prevFilter) => ({
                        ...prevFilter,
                        country: e.target.value.split(","),
                      }))
                    }
                  >
                    {countries.map((country) => (
                      <SelectItem
                        key={country.iso_3166_1}
                        startContent={
                          <div>
                            <Avatar
                              className="w-6 h-5 rounded-md"
                              alt={country.english_name}
                              src={`https://flagcdn.com/${country.iso_3166_1.toLocaleLowerCase()}.svg`}
                            />
                          </div>
                        }
                      >
                        {country.english_name}
                      </SelectItem>
                    ))}
                  </Select>
                </AccordionItem>
              </Accordion>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="bordered" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
export default FilterModal
