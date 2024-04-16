'use client'

import {useEffect, useState} from 'react'
import {useQuery} from '@tanstack/react-query'
import Navbar from './(components)/navbar'
import SearchBar from './(components)/searchBar'
import {TVShowType} from './type'
import Card from './(components)/card'
import {useAtom} from 'jotai'
import {accessed, favoriteTVShowsAtom} from './atom'
import EnterSite from './(components)/enterSite'

export default function Home() {
  const api = 'https://api.tvmaze.com/shows'

  const [search, setSearch] = useState('')

  const [favorites, setFavorites] = useAtom(favoriteTVShowsAtom)
  const [entered, setEntered] = useAtom(accessed)

  const handleAccess = () => {
    setEntered(true)
  }

  const {
    isPending,
    error,
    refetch,
    data: moviesData,
  } = useQuery<TVShowType[]>({
    queryKey: ['movies'],
    queryFn: () => fetch(api).then((res) => res.json()),
  })

  const data = search
    ? moviesData?.filter((item) =>
        item?.name?.toLowerCase()?.includes(search?.toLowerCase())
      )
    : moviesData

  useEffect(() => {
    refetch()
  }, [search, refetch])

  function addToFavorites(newShow: TVShowType) {
    setFavorites((previousShows) => [...previousShows, newShow])
  }

  function removeFromFavorites(newShow: TVShowType) {
    setFavorites((previousShows) =>
      previousShows?.filter((fav) => fav?.id !== newShow?.id)
    )
  }

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      {entered ? (
        <div className="w-full text-white py-5 px-4 xl:px-0">
          <Navbar />
          <div className="flex flex-col py-6">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <section className="-ml-0 mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-8 lg:gap-6 md:gap-4 mx-4 md:mx-0 w-full lg:w-fit">
              {data?.map((item, i) => {
                return (
                  <Card
                    cardData={item}
                    id={item?.id}
                    movieImg={item?.image?.medium}
                    year={item?.premiered}
                    rating={item?.rating?.average}
                    name={item?.name}
                    key={i}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                  />
                )
              })}
            </section>
          </div>
        </div>
      ) : (
        <EnterSite handleAccess={handleAccess} />
      )}
    </>
  )
}
