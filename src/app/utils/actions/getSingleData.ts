import { operations } from "../../../../schema"
import { AuthMiddleware, client, types } from "./config"

client.use(AuthMiddleware)
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

export async function getSliderItems(listID: number) {
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

  export async function getPerson(id: number): Promise<
  | {
        adult: boolean
        also_known_as?: string[]
        biography?: string
        birthday?: string
        deathday?: string
        gender: number
        homepage?: unknown
        id: number
        imdb_id?: string
        known_for_department?: string
        name?: string
        place_of_birth?: string
        popularity: number
        profile_path?: string
        combined_credits: operations["person-combined-credits"]["responses"]["200"]["content"]["application/json"]
    }
    | undefined
    > {
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


export async function getPopularPerson(page:number) {
    const {data} = await client.GET("/3/person/popular",{
        params:{
        query:{
          page:page
        }
    }
})
return data?.results
}

