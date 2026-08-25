import { Button, Modal, useOverlayState } from "@heroui/react"

const SearchModal = ({
  isOpen,
  onOpenChange,
  children
}: {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  children: React.ReactNode
}) => {
  return (
    <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal.Container
        placement="auto"
        scroll="inside"
      >
        <Modal.Dialog>
          {({ close: onClose }) => (
            <>
              <Modal.Header>
                <Modal.Heading>Search For Something</Modal.Heading>
              </Modal.Header>
              <Modal.Body>{children}</Modal.Body>
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
  )
}
export default SearchModal
