import { operations } from "../../../../schema"
import { AuthMiddleware, categoris, client } from "./config"

client.use(AuthMiddleware)
export async function getMainWeekTrending(category: "movie" | "tv" | "all") {
  switch (category) {
    case "movie": {
      const { data } = await client.GET("/3/trending/movie/{time_window}", {
        params: {
          path: {
            time_window: "day",
          },
          query: {
            language: "en-US",
          },
        },
      })
      return data?.results
    }
    case "tv": {
      const { data } = await client.GET("/3/trending/tv/{time_window}", {
        params: {
          path: {
            time_window: "day",
          },
          query: {
            language: "en-US",
          },
        },
      })
      return data?.results
    }
    case "all": {
      const { data } = await client.GET("/3/trending/all/{time_window}", {
        params: {
          path: {
            time_window: "day",
          },
          query: {
            language: "en-US",
          },
        },
      })
      return data?.results
    }
  }
}

export async function getTodayPopularList(category: "movie" | "tv") {
  switch (category) {
    case "movie": {
      const { data } = await client.GET("/3/movie/popular", {
        params: {
          query: {
            language: "en-US",
          },
        },
      })
      return data?.results?.slice(0, 9)
    }
    case "tv": {
      const { data } = await client.GET("/3/tv/popular", {
        params: {
          query: {
            language: "en-US",
          },
        },
      })
      return data?.results?.slice(0, 9)
    }
  }
}

export async function getDiscover({
  cat,
  id = 0,
  filter,
}: {
  cat: categoris
  id: number
  filter:
    | operations["discover-movie"]["parameters"]["query"]
    | operations["discover-tv"]["parameters"]["query"]
    | null
}) {
  switch (cat) {
    case "movie": {
      const { data } = await client.GET("/3/discover/movie", {
        params: {
          query: filter as any | {},
        },
      })
      return data?.results
    }
    case "tv": {
      const { data } = await client.GET("/3/discover/tv", {
        params: {
          query: filter as any | {},
        },
      })
      return data?.results
    }
    case "SimilarMovie": {
      const { data } = await client.GET(`/3/movie/{movie_id}/recommendations`, {
        params: {
          path: {
            movie_id: id,
          },
        },
      })
      return data?.results
    }

    case "SimilarTv": {
      const { data } = await client.GET("/3/tv/{series_id}/similar", {
        params: {
          path: {
            series_id: id.toString(),
          },
        },
      })
      return data?.results
    }
  }
}

export async function getTopImdbMovies() {
  const { data } = await client.GET("/3/list/{list_id}", {
    params: {
      path: {
        list_id: 1309,
      },
      query: {
        language: "en-US",
        page: 1,
      },
    },
  })
  return data?.items
}

export async function getUpcomingAndTopSelling(cat: string) {
  switch (cat) {
    case "Top": {
      const { data } = await client.GET("/3/discover/movie", {
        params: {
          query: {
            include_adult: false,
            include_video: false,
            language: "en-US",
            page: 1,
            primary_release_year: 2024,
            region: "US",
            sort_by: "revenue.desc",
            with_original_language: "en",
          },
        },
      })
      return data?.results?.slice(0, 12)
    }
    case "Up": {
      const { data } = await client.GET("/3/movie/upcoming", {
        params: {
          query: {
            language: "en-US",
            page: 1,
          },
        },
      })
      return data?.results?.slice(0, 12)
    }
  }
}
