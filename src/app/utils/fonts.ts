import { Pinyon_Script, Rubik, Vazirmatn } from "next/font/google"
import localFont from "next/font/local"

export const rubik = Rubik({ subsets: ["latin"], display: "block" })
export const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
  display: "fallback"
})
export const vazirMatn = Vazirmatn({
    subsets:['arabic']
})
export const logoFont = localFont({
  src: "../../../public/fonts/Corleone.otf"
})
