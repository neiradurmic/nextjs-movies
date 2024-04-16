'use client'

import {useQuery} from '@tanstack/react-query'
import Link from 'next/link'
import Navbar from '../../(components)/navbar'
import {TVShowType} from '../../type'
import Image from 'next/image'
import dayjs from 'dayjs'
import {FaStar} from 'react-icons/fa6'
import {notFound} from 'next/navigation'

export default function MoviePage({
  params,
}: {
  params: {movie: string | number}
}) {
  const {
    isPending,
    error,
    data: movieData,
  } = useQuery<TVShowType>({
    queryKey: ['movie'],
    queryFn: () =>
      fetch(`https://api.tvmaze.com/shows/${params?.movie}`).then((res) =>
        res.json()
      ),
  })

  if (isPending) return 'Loading...'

  if (error) notFound()

  if (movieData && !movieData?.summary) {
    notFound()
  }

  return (
    <div className="w-full text-white mb-10 py-5 px-5 lg:px-0">
      <Navbar />
      <Link href={'/'}>
        <div className="relative border border-green rounded-lg w-fit my-6 hover:opacity-90">
          <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-dark-blue via-sky-blue to-green opacity-50 blur"></div>
          <div className="relative flex bg-slate-900 items-center rounded-lg px-4 gap-4 h-12 w-24 flex justify-center">
            Back
          </div>
        </div>
      </Link>
      <div className="flex flex-col md:flex-row gap-12 mt-12">
        <Image
          src={movieData?.image?.original}
          alt="movie"
          height={500}
          width={320}
          className="rounded-md"
        />
        <div className="flex gap-4 flex-col max-w-[700px] text-justify">
          <p className="text-4xl font-bold mb-4">{movieData?.name}</p>
          <div dangerouslySetInnerHTML={{__html: movieData?.summary}} />
          <div className="flex gap-4 text-md font-bold text-gray-500">
            <p>
              {dayjs(movieData?.premiered?.substring(0, 10))?.format('YYYY')}
            </p>
            <p>{movieData?.averageRuntime} minutes</p>
            <div className="flex gap-2">
              <FaStar color="#B6F09C" className="mt-0.5" />
              <p>{movieData?.rating?.average}/10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
