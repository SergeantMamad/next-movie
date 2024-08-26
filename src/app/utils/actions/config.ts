import createClient, { Middleware } from "openapi-fetch"
import { paths } from "../../../../schema"

export type categoris = "movie" | "tv" | "SimilarMovie" | "SimilarTv"
export type types = "movie" | "tv" | "TvSeason" | "actor"
export const AuthMiddleware: Middleware = {
  async onRequest({ request, options }) {
    request.headers.set(
      "Authorization",
      "Bearer " + process.env.NEXT_PUBLIC_API_KEY
    )
    return request
  },
}

export const client = createClient<paths>({ baseUrl: "https://api.themoviedb.org" })
