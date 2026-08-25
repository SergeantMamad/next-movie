import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next Movie",
    short_name: "Next Movie",
    description: "Discover movies and TV series.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0c0f",
    theme_color: "#0d0c0f",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
