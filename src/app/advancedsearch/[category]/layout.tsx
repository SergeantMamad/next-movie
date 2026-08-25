import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced Search",
}

export default function AdvancedSearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
