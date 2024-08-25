// import { getSession, getToken } from "@/action"
// import {
//   Button,
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
// } from "@nextui-org/react"
// import { useQuery } from "@tanstack/react-query"
// import { useEffect, useState } from "react"
// import Link from "next/link"
// import { setCookie } from "cookies-next"

// const SignInModal = ({
//   isOpen,
//   onOpenChange,
// }: {
//   isOpen: boolean
//   onOpenChange: () => void
// }) => {
//   const [token, setToken] = useState<string | null>(null)
//   const dataQuery = useQuery({
//     queryKey: ["getToken"],
//     queryFn: getToken,
//     enabled: false,
//   })
//   const sessionQuery = useQuery({
//     queryKey: ["getSession"],
//     queryFn: () => getSession(token!),
//     enabled: false,
//   })
//   useEffect(() => {
//     if (dataQuery.data?.request_token) {
//       setToken(dataQuery.data.request_token)
//     }
//   }, [dataQuery.data, setToken])
//   useEffect(() => {
//     setCookie("session_id", sessionQuery?.data?.session_id!)
//   }, [sessionQuery.data])
//   return (
//     <Modal
//       isOpen={isOpen}
//       placement={"auto"}
//       onOpenChange={onOpenChange}
//       scrollBehavior="inside"
//       size="md"
//     >
//       <ModalContent>
//         {(onClose) => (
//           <>
//             <ModalHeader>Sign In Steps</ModalHeader>
//             <ModalBody>
//               <div className="flex flex-col gap-3">
//                 <p className="font-bold">
//                   Sign in process in the next movie is a little bit different,
//                   But don't worry, we will help you in your sign in process
//                 </p>
//                 <p className="text-sm font-semibold">
//                   1- First you need to get your request token by clicking the
//                   button here:
//                 </p>
//                 <button
//                   onClick={() => dataQuery.refetch()}
//                   className="bg-green-600 py-2 rounded-lg font-semibold"
//                 >
//                   Get request token
//                 </button>
//                 {token && (
//                   <>
//                     <p className="text-sm font-semibold mt-4">
//                       2- You need to confirm your access in my website through
//                       tmdb api with this link:
//                     </p>
//                     <Link
//                       target="_blank"
//                       href={`https://www.themoviedb.org/authenticate/${token}`}
//                       className="bg-green-600 py-2 rounded-lg font-semibold text-center"
//                     >
//                       Allow Access To Tmdb
//                     </Link>
//                     <p className="text-sm font-semibold mt-4">
//                       3- After You Confirmed Your Access Please click on this
//                       button to get your unique id (It doesn't work if you don't
//                       confirm your access):
//                     </p>
//                     <Button
//                       onClick={() => sessionQuery.refetch()}
//                       className="bg-green-600 py-2 rounded-lg font-semibold text-center"
//                     >
//                       Get Your ID
//                     </Button>
//                   </>
//                 )}
//               </div>
//             </ModalBody>
//             <ModalFooter>
//               <Button color="danger" variant="bordered" onPress={onClose}>
//                 Close
//               </Button>
//             </ModalFooter>
//           </>
//         )}
//       </ModalContent>
//     </Modal>
//   )
// }
// export default SignInModal
