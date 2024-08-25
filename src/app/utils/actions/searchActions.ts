import { AuthMiddleware, client } from "./config"

client.use(AuthMiddleware)

export async function getSearch({
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

export async function getPersonSearch(query:string,page:number) {
    const { data } = await client.GET("/3/search/person", {
      params: {
        query: {
          query: query,
          include_adult: false,
          language: "en-US",
          page: page,
        },
      },
    })
    return data?.results
  }
  