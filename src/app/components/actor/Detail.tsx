import { customcn } from "@/app/utils/functions/customcn"

const Detail = ({
  title,
  children,
  isInModal,
}: {
  title: string
  isInModal: boolean
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col justify-between w-full items-center">
      <h1 className={customcn("text-xl font-semibold", isInModal && "text-sm w-max")}>
        {title}
      </h1>
      <p className={customcn("text-sm text-gray-500", isInModal && "text-xs w-max")}>
        {children}
      </p>
    </div>
  )
}
export default Detail
