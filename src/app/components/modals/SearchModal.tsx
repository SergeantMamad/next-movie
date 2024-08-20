import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react"

const SearchModal = ({
  isOpen,
  onOpenChange,
  children,
}: {
  isOpen: boolean
  onOpenChange: () => void
  children: React.ReactNode
}) => {
  return (
    <Modal
      isOpen={isOpen}
      placement={"auto"}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      classNames={{
        base: "max-w-[900px] border border-stone-700",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
                Search For Something
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
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
export default SearchModal
