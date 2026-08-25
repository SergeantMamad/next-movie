import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "People Search",
}

export default function PersonSearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
