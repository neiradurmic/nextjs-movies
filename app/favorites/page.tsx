'use client'

import Link from 'next/link'
import Navbar from '../(components)/navbar'
import {useAtom} from 'jotai'
import {favoriteTVShowsAtom} from '../atom'
import Card from '../(components)/card'
import {TVShowType} from '../type'

type Props = {}

export default function Favorites({}: Props) {
  const [favorites, setFavorites] = useAtom(favoriteTVShowsAtom)

  function addToFavorites(newShow: TVShowType) {
    setFavorites((previousShows) => [...previousShows, newShow])
  }

  function removeFromFavorites(newShow: TVShowType) {
    setFavorites((previousShows) =>
      previousShows?.filter((fav) => fav?.id !== newShow?.id)
    )
  }

  return (
    <div className="w-full text-white mb-10 py-5 px-5 xl:px-0">
      <Navbar />
      <Link href={'/'}>
        <div className="relative border border-green rounded-lg w-fit my-6 hover:opacity-90">
          <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-dark-blue via-sky-blue to-green opacity-50 blur"></div>
          <div className="relative flex bg-slate-900 items-center rounded-lg px-4 gap-4 h-12 w-24 flex justify-center">
            Back
          </div>
        </div>
      </Link>
      <section className="-ml-0 mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-8 lg:gap-6 md:gap-4 mx-4 md:mx-0 w-full lg:w-fit">
        {favorites?.map((item, i) => {
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
  )
}
