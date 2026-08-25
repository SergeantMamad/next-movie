import {
  Accordion,
  Avatar,
  Button,
  Label,
  ListBox,
  Modal,
  Select,
  useOverlayState,
} from "@heroui/react"
import NumberBetweenInputs from "../advancedsearch/NumberBetweenInputs"
import { movieGenre } from "@/app/utils/configs/genres"
import GenreButtons from "../advancedsearch/GenreButtons"
import { countries } from "@/app/utils/configs/countries"
import { filter } from "@/app/advancedsearch/[category]/page"

const AccordionItem = ({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) => (
  <Accordion.Item id={id}>
    <Accordion.Heading>
      <Accordion.Trigger>{title}</Accordion.Trigger>
    </Accordion.Heading>
    <Accordion.Panel>
      <Accordion.Body>{children}</Accordion.Body>
    </Accordion.Panel>
  </Accordion.Item>
)

const FilterModal = ({
  isOpen,
  onOpenChange,
  filter,
  setFilter
}: {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  filter:filter
  setFilter:React.Dispatch<React.SetStateAction<filter>>
}) => {
  return (
    <Modal state={useOverlayState({ isOpen, onOpenChange })}>
      <Modal.Backdrop>
        <Modal.Container placement="auto" scroll="inside">
          <Modal.Dialog>
            {({ close: onClose }) => (
              <>
                <Modal.Header>
                  <Modal.Heading>Search For Something</Modal.Heading>
                </Modal.Header>
                <Modal.Body>
              <Accordion
                allowsMultipleExpanded
              >
                <AccordionItem id="1" title="Title">
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
                <AccordionItem id="2" title="Genres">
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
                <AccordionItem id="3" title="Number Of Votes">
                  <NumberBetweenInputs
                    filter={filter}
                    numberField="voteCount"
                    setFilter={setFilter}
                    minPlaceHolder="Like 1000"
                    maxPlaceHolder="Like 20000"
                  />
                </AccordionItem>
                <AccordionItem id="4" title="Ratings Average">
                  <NumberBetweenInputs
                    filter={filter}
                    numberField="ratings"
                    setFilter={setFilter}
                    minPlaceHolder="Like 2.1"
                    maxPlaceHolder="Like 9.6"
                  />
                </AccordionItem>
                <AccordionItem id="5" title="Runtime">
                  <NumberBetweenInputs
                    filter={filter}
                    numberField="runtime"
                    setFilter={setFilter}
                    minPlaceHolder="Like 1"
                    maxPlaceHolder="Like 160"
                  />
                </AccordionItem>
                <AccordionItem id="6" title="Release Date / First Air Time">
                  <NumberBetweenInputs
                    filter={filter}
                    numberField="releaseDate"
                    setFilter={setFilter}
                  />
                </AccordionItem>
                <AccordionItem id="7" title="Origin Country">
                  <Select
                    className="max-w-full bg-[#08070A]"
                    selectionMode="multiple"
                    aria-label="Select Country"
                    placeholder="Select A Country"
                    value={filter.country}
                    onChange={(value) =>
                      setFilter((prevFilter) => ({
                        ...prevFilter,
                        country: value as string[],
                      }))
                    }
                  >
                    <Label>Select Country</Label>
                    <Select.Trigger>
                      <Select.Value />
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
                        <Avatar className="w-6 h-5 rounded-md">
                          <Avatar.Image
                            src={`https://flagcdn.com/${country.iso_3166_1.toLocaleLowerCase()}.svg`}
                            alt={country.english_name}
                          />
                        </Avatar>
                        {country.english_name}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </AccordionItem>
              </Accordion>
                </Modal.Body>
                <Modal.Footer>
              <Button variant="danger" onPress={onClose}>
                Close
              </Button>
                </Modal.Footer>
              </>
            )}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}
export default FilterModal
