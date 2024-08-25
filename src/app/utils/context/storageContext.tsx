"use client"
import { useLocalStorage } from "usehooks-ts"
import { Items } from "../configs/itemsType"
import { createContext } from "react";
type StorageContextType = {
    handlePutItems: ({
      genres,
      id,
      mediaType,
      posterPath,
      title,
    }: {
      genres: number[];
      id: string;
      mediaType: string;
      posterPath: string;
      title: string;
    }) => void;
    items: Items | undefined;
  }
  

export const StorageContext = createContext<StorageContextType | undefined>(undefined);

export const StorageContextProvider = ({children}:{
    children:React.ReactNode
}) => {
  const [items, setItems] = useLocalStorage<Items>("watchlist", [], {
    initializeWithValue: false,
  })
  function handlePutItems({
    genres,
    id,
    mediaType,
    posterPath,
    title,
  }: {
    genres: number[]
    id: string
    mediaType: string
    posterPath: string
    title: string
  }) {
    if (items?.find((prevValue) => prevValue.id == id)) {
      return setItems(items.filter((prevValue) => prevValue.id != id))
    } else {
      return setItems((prevItems) => [
        ...(prevItems || []),
        {
          genres: genres,
          id: id,
          mediaType: mediaType.toLocaleLowerCase(),
          poster: posterPath,
          title: title,
        },
      ])
    }
  }
  return (
    <StorageContext.Provider
      value={{ handlePutItems,items }}
    >
      {children}
    </StorageContext.Provider>
  )
}
