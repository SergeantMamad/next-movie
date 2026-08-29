import { Pinyon_Script, Rubik } from "next/font/google"
import "./globals.css"
import NextTopLoader from "nextjs-toploader"
import TanstackProvider from "./providers/TanStackProvider"
import LayoutProvider from "./providers/LayoutProvider"
import Navbar from "./components/navbar/navbar"
import { StorageContextProvider } from "./utils/context/storageContext"
import PhoneNavbar from "./components/navbar/PhoneNavbar"
import InstallAppPrompt from "./components/other/InstallAppPrompt"

import type { Metadata } from 'next'
import { rubik } from "./utils/fonts"
import { Toast } from "@heroui/react"
 
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
            <TanstackProvider>
              <LayoutProvider>
                <StorageContextProvider>
                  <Navbar />
                  <PhoneNavbar />
                  <InstallAppPrompt />
                  <NextTopLoader
                    color="#00925D"
                    crawlSpeed={200}
                    crawl={true}
                    showSpinner={false}
                    speed={500}
                    height={1}
                  />
                  {children}
                  <Toast.Provider />
                </StorageContextProvider>
              </LayoutProvider>
            </TanstackProvider>
      </body>
    </html>
  )
}
