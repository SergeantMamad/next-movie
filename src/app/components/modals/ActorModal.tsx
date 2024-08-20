import { getActor } from "@/action"
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
} from "@nextui-org/react"
import { useSuspenseQuery } from "@tanstack/react-query"
import ActorInitialDetail from "../actor/ActorInitialDetail"
import Biography from "../actor/Biography"
import KnownForSlider from "../actor/KnownForSlider"
import { removeDuplicates } from "@/app/utils/functions/removeDuplicates"
import Link from "next/link"
import ActorAccordion from "../actor/ActorAccordion"

const ActorModal = ({
  id,
  isOpen,
  onOpenChange,
}: {
  id: number
  isOpen: boolean
  onOpenChange: () => void
}) => {
  const { data } = useSuspenseQuery({
    queryKey: ["actor" + id],
    queryFn: () => getActor(id),
  })

  return (
    <Modal
      isOpen={isOpen}
      placement={"auto"}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      classNames={{
        base: "max-w-[900px]",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <ActorInitialDetail
                birthday={data?.birthday!}
                deathday={data?.deathday}
                gender={data?.gender!}
                knownForDepartment={data?.known_for_department!}
                name={data?.name!}
                placeOfBirth={data?.place_of_birth!}
                profilePath={data?.profile_path!}
                isInModal={true}
              />
              <Biography isInModal={true} biography={data?.biography!} />
              <KnownForSlider
                works={removeDuplicates(
                  [
                    ...data?.combined_credits.crew!,
                    ...data?.combined_credits.cast!,
                  ],
                  "id"
                )}
              />
              <h1 className="font-bold text-white mt-5 text-lg">
                3 Latest Works
              </h1>
              <ActorAccordion
                credits={data?.combined_credits!}
                defaultPagination={3}
                isInModal={true}
              />
            </ModalBody>
            <ModalFooter>
              <Link
                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-white text-white data-[hover=true]:opacity-hover"
                href={`../actor/${id}`}
              >
                Show All Info
              </Link>
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
export default ActorModal
