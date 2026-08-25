import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Multi Search",
}

export default function MultiSearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
