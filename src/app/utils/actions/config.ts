import createClient, { Middleware } from "openapi-fetch"
import { paths } from "../../../../schema"

export type categoris = "movie" | "tv" | "SimilarMovie" | "SimilarTv"
export type types = "movie" | "tv" | "TvSeason" | "actor"
export const AuthMiddleware: Middleware = {
  async onRequest({ request, options }) {
    request.headers.set(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTg1MThkYzYzYWJkZTc2ODU0Yzk2ZWQxM2M5NWNlMSIsInN1YiI6IjY1NzQ2ZWJjN2EzYzUyMDBjYTc4YzE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o7EsCAMQAr00UlxKw7idJ6YtIoz6o5Yg4rkD9cK-igk"
    )
    return request
  },
}

export const client = createClient<paths>({ baseUrl: "https://api.themoviedb.org" })
