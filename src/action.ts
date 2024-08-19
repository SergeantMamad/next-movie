import createClient, { Middleware } from "openapi-fetch"
import type { operations, paths } from "../schema"

export type categoris = "movie" | "tv" | "SimilarMovie" | "SimilarTv"
export type types = "movie" | "tv" | "TvSeason" | "actor"
const AuthMiddleware: Middleware = {
  async onRequest({ request, options }) {
    request.headers.set(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTg1MThkYzYzYWJkZTc2ODU0Yzk2ZWQxM2M5NWNlMSIsInN1YiI6IjY1NzQ2ZWJjN2EzYzUyMDBjYTc4YzE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o7EsCAMQAr00UlxKw7idJ6YtIoz6o5Yg4rkD9cK-igk"
    )
    return request
  },
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTg1MThkYzYzYWJkZTc2ODU0Yzk2ZWQxM2M5NWNlMSIsInN1YiI6IjY1NzQ2ZWJjN2EzYzUyMDBjYTc4YzE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o7EsCAMQAr00UlxKw7idJ6YtIoz6o5Yg4rkD9cK-igk",
  },
}
const client = createClient<paths>({ baseUrl: "https://api.themoviedb.org" })
client.use(AuthMiddleware)

export async function MainWeekTrending(category: "movie" | "tv" | "all") {
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

export async function TodayPopular(category: "movie" | "tv") {
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

export async function DiscoverMain({
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

export async function TopImdb() {
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

export async function UpTopMain(cat: string) {
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

export async function getMovie(id: number) {
  const { data } = await client.GET("/3/movie/{movie_id}", {
    params: {
      path: {
        movie_id: id,
      },
    },
  })
  return data
}

export async function getSeries(id: number) {
  const resp = await client.GET("/3/tv/{series_id}", {
    params: {
      path: {
        series_id: id,
      },
    },
  })
  return resp.data
}

export async function getCasts({
  type,
  id,
  season = 0,
}: {
  type: types
  id: number
  season: number
}) {
  switch (type) {
    case "movie": {
      const { data } = await client.GET("/3/movie/{movie_id}/credits", {
        params: {
          path: {
            movie_id: id,
          },
        },
      })
      return data?.cast?.slice(0, 15)
    }
    case "tv": {
      const { data } = await client.GET("/3/tv/{series_id}/aggregate_credits", {
        params: {
          path: {
            series_id: id,
          },
        },
      })
      return data?.cast?.slice(0, 15)
    }
    case "TvSeason": {
      const { data } = await client.GET(
        "/3/tv/{series_id}/season/{season_number}/aggregate_credits",
        {
          params: {
            path: {
              series_id: id,
              season_number: season,
            },
          },
        }
      )
      return data?.cast?.slice(0, 15)
    }
  }
}

export async function getImages({
  type,
  id,
  season = 0,
}: {
  type: types
  id: number
  season: number
}) {
  switch (type) {
    case "movie": {
      const { data } = await client.GET("/3/movie/{movie_id}/images", {
        params: {
          path: {
            movie_id: id,
          },
        },
      })
      return data?.backdrops?.filter(
        (iso) => iso.iso_639_1 == "en" || iso.iso_639_1 == null
      )
    }

    case "tv": {
      const { data } = await client.GET("/3/tv/{series_id}/images", {
        params: {
          path: {
            series_id: id,
          },
        },
      })
      return data?.backdrops?.filter(
        (iso) => iso.iso_639_1 == "en" || iso.iso_639_1 == null
      )
    }
    case "TvSeason": {
      const { data } = await client.GET(
        "/3/tv/{series_id}/season/{season_number}/images",
        {
          params: {
            path: {
              series_id: id,
              season_number: season,
            },
          },
        }
      )
      return data?.posters?.filter(
        (iso) => iso.iso_639_1 == "en" || iso.iso_639_1 == null
      )
    }
    case "actor": {
      const { data } = await client.GET("/3/person/{person_id}/images", {
        params: {
          path: {
            person_id: id,
          },
        },
      })
      return data?.profiles?.filter(
        (iso) => iso.iso_639_1 == "en" || iso.iso_639_1 == null
      )
    }
  }
}

export async function getVids({
  type,
  id,
  season = 0,
}: {
  type: types
  id: number
  season: number
}) {
  switch (type) {
    case "movie": {
      const { data } = await client.GET(`/3/movie/{movie_id}/videos`, {
        params: {
          path: {
            movie_id: id,
          },
        },
      })
      return data?.results
        ?.filter(
          (options) => options.official == true && options.site == "YouTube"
        )
        .reverse()
    }
    case "tv": {
      const { data } = await client.GET("/3/tv/{series_id}/videos", {
        params: {
          path: {
            series_id: id,
          },
        },
      })
      return data?.results
        ?.filter(
          (options) => options.official == true && options.site == "YouTube"
        )
        .reverse()
    }

    case "TvSeason": {
      const { data } = await client.GET(
        "/3/tv/{series_id}/season/{season_number}/videos",
        {
          params: {
            path: {
              series_id: id,
              season_number: season,
            },
          },
        }
      )
      return data?.results
        ?.filter(
          (options) => options.official == true && options.site == "YouTube"
        )
        .reverse()
    }
  }
}

export async function getSeason({
  id,
  season,
}: {
  id: number
  season: number
}) {
  const { data } = await client.GET(
    "/3/tv/{series_id}/season/{season_number}",
    {
      params: {
        path: {
          series_id: id,
          season_number: season,
        },
      },
    }
  )
  return data
}

export async function search(value: string) {
  const { data } = await client.GET("/3/search/multi", {
    params: {
      query: {
        query: value,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
    },
  })
  return data?.results?.filter((options) => options.media_type != "person")
}

export async function searchall({
  value,
  pageParam,
}: {
  value: string
  pageParam: number
}) {
  const { data } = await client.GET("/3/search/multi", {
    params: {
      query: {
        query: value,
        include_adult: false,
        language: "en-US",
        page: pageParam,
      },
    },
  })
  return data?.results?.filter((options) => options.media_type != "person")
}

export async function SliderItems(listID: number) {
  const { data } = await client.GET("/3/list/{list_id}", {
    params: {
      path: {
        list_id: listID,
      },
    },
  })
  return data?.items
}

export async function getCategories(mainCategory: "tv" | "movie") {
  switch (mainCategory) {
    case "movie": {
      const { data } = await client.GET("/3/genre/movie/list")
      return data?.genres
    }
    case "tv": {
      const { data } = await client.GET("/3/genre/tv/list")
      return data?.genres
    }
  }
}

export async function getActor(id: number):Promise<{
  adult: boolean;
  also_known_as?: string[];
  biography?: string;
  birthday?: string;
  deathday?: string;
  gender: number;
  homepage?: unknown;
  id: number;
  imdb_id?: string;
  known_for_department?: string;
  name?: string;
  place_of_birth?: string;
  popularity: number;
  profile_path?: string;
  combined_credits:operations['person-combined-credits']['responses']['200']['content']['application/json']
} | undefined>
 {
  const { data } = await client.GET("/3/person/{person_id}", {
    params: {
      path: {
        person_id: id,
      },
      query: {
        append_to_response: "combined_credits",
      },
    },
  })
  return data as any
}

export async function getActorPictures(id: number) {
  const { data } = await client.GET("/3/person/{person_id}/images", {
    params: {
      path: {
        person_id: id,
      },
    },
  })
  return data
}
