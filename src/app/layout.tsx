import { Rubik } from "next/font/google"
import "./globals.css"
import NextTopLoader from "nextjs-toploader"
import { Nextprovider } from "./providers/Nextprovider"
import TanstackProvider from "./providers/TanStackProvider"
import LayoutProvider from "./providers/LayoutProvider"
import Navbar from "./components/navbar/navbar"
import { StorageContextProvider } from "./utils/context/storageContext"
import PhoneNavbar from "./components/navbar/PhoneNavbar"
const rubik = Rubik({ subsets: ["latin"], display: "swap" })
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    template: '%s | Next Movie',
    default: 'Next Movie',
  },
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body
        className={`${rubik.className} dark bg-[#0d0c0f] text-foreground min-h-screen`}
      >
          <Nextprovider>
            <TanstackProvider>
              <LayoutProvider>
                <StorageContextProvider>
                  <Navbar />
                  <PhoneNavbar />
                  <NextTopLoader
                    color="#00925D"
                    crawlSpeed={200}
                    crawl={true}
                    showSpinner={false}
                    speed={500}
                    height={1}
                  />
                  {children}
                </StorageContextProvider>
              </LayoutProvider>
            </TanstackProvider>
          </Nextprovider>
      </body>
    </html>
  )
}
