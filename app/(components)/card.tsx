import {PiTelevisionFill} from 'react-icons/pi'
import Image from 'next/image'
import dayjs from 'dayjs'
import Link from 'next/link'
import {TVShowType} from '../type'
import {useAtom} from 'jotai'
import {favoriteTVShowsAtom} from '../atom'
import {useAutoAnimate} from '@formkit/auto-animate/react'
import {IoBookmark} from 'react-icons/io5'
import {CiBookmark} from 'react-icons/ci'

type Props = {
  cardData: TVShowType
  id: number
  movieImg: string
  year: string
  rating: number
  name: string
  addToFavorites: (newShow: TVShowType) => void
  removeFromFavorites: (newShow: TVShowType) => void
}

export default function Card(props: Props) {
  const [animationParent] = useAutoAnimate()

  const [favorites, setFavorites] = useAtom(favoriteTVShowsAtom)
  const isFavorite = favorites?.some((fav) => fav?.id === props?.id)

  function handleFavorites() {
    if (isFavorite) {
      props?.removeFromFavorites(props?.cardData)
    } else {
      props?.addToFavorites(props?.cardData)
    }
  }

  return (
    <div className="relative">
      <button
        ref={animationParent}
        onClick={handleFavorites}
        className="h-7 w-7 bg-black/60 absolute right-2 top-2 rounded-full flex justify-center items-center z-10"
      >
        {isFavorite ? (
          <IoBookmark fill="#4D62E5" />
        ) : (
          <CiBookmark className="text-xl" fill="#fff" />
        )}
      </button>
      <Link
        href={`/movies/${props?.id}`}
        className="flex flex-col gap-y-1 relative"
      >
        <div className="max-h-[325px] h-[200px] w- md:max-h-[296px] md:w-[196px] md:h-[696px] relative">
          <Image
            src={props?.movieImg}
            alt="image"
            height={800}
            width={400}
            className="h-full w-full object-cover hover:scale-105 transition-all"
          />
        </div>
        <div className="flex text-sm gap-3">
          <div>{dayjs(props?.year?.substring(0, 10))?.format('YYYY')}</div>
          <div className="flex gap-3 items-center">
            <PiTelevisionFill />
            <span>TV Series</span>
          </div>
          <p>{props?.rating}</p>
        </div>
        <p className="lg:hidden hover:text-[#B6F09C]">
          {props?.name?.slice(0, 18)}
          {props?.name?.length > 18 && <span>...</span>}
        </p>
        <p className="hidden lg:block hover:text-[#B6F09C]">
          {props?.name?.slice(0, 24)}
          {props?.name?.length > 24 && <span>...</span>}
        </p>
      </Link>
    </div>
  )
}
