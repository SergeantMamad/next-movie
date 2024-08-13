import { Rubik } from "next/font/google"
import "./globals.css"
import NextTopLoader from "nextjs-toploader"
import {Nextprovider} from "./providers/Nextprovider"
import TanstackProvider from "./providers/TanStackProvider"
import LayoutProvider from "./providers/LayoutProvider"
import Navbar from "./components/navbar/navbar"
const rubik = Rubik({ subsets: ["latin"], display: "swap" })
export default function RootLayout({ children }:{
  children:React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} dark bg-[#0d0c0f]  text-foreground`}>
        <Nextprovider>
          <TanstackProvider>
            <LayoutProvider>
              <Navbar />
              <NextTopLoader
                color="#00925D"
                crawlSpeed={200}
                crawl={true}
                showSpinner={false}
                speed={500}
                height={1}
              />
              {children}
            </LayoutProvider>
          </TanstackProvider>
        </Nextprovider>
      </body>
    </html>
  )
}
