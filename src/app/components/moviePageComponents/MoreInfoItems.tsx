import IconChange from "@/app/utils/functions/IconChange"

type MoreInfoItemsProps = {
  title: string
  iconTitle: string
  children: React.ReactNode
}
const MoreInfoItems = ({ title, iconTitle,children }: MoreInfoItemsProps) => {
  return (
    <div className="flex gap-6 items-center">
      <IconChange iconType={iconTitle} />
      <div className="flex flex-col gap-3">
        <h1 className="text-white font-semibold text-lg w-full">{title}</h1>
        <p className="text-gray-500 font-semibold text-sm w-max">{children}</p>
      </div>
    </div>
  )
}
export default MoreInfoItems
