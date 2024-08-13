import { Tab, Tabs } from "@nextui-org/react"

type TabItemsProps = {
  tabItems: string[]
  setItem: React.Dispatch<React.SetStateAction<string>>
  item: string
}
const TabItems = ({ tabItems, setItem, item }: TabItemsProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        className="mt-5"
        variant="underlined"
        color="primary"
        selectedKey={item}
        onSelectionChange={setItem as any}
      >
        {tabItems.map((tab, index) => (
          <Tab key={tab} title={tab} />
        ))}
      </Tabs>
    </div>
  )
}
export default TabItems
