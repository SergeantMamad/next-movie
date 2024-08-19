import { UserIcon } from "@heroicons/react/24/solid"

const JobDescription = ({ job }: { job: string }) => {
  return (
    <div className="flex gap-2 items-center w-full">
      <UserIcon className="w-4 h-4 text-CustomGray" />
      <p className="text-CustomGray font-semibold text-xs truncate">{job}</p>
    </div>
  )
}
export default JobDescription
