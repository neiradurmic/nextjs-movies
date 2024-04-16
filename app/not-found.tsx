'use client'

import logo from '../public/logo.svg'
import bgImage from '../public/not-found-bg.png'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="absolute left-0 bg-dark-gray flex justify-between w-full min-h-screen fade-in">
      <div className="relative flex flex-col items-start w-full min-h-screen bg-dark-gray sm:pb-0">
        <Link href={'/'} className="flex mb-4 mt-12 ml-4 lg:ml-12">
          <Image src={logo} alt="logo" className="w-8" />
        </Link>
        <div className="max-w-2xl mx-auto w-full lg:px-10 mb-20 px-4">
          <div className="flex gap-x-2 text-3xl text-white font-bold mt-12">
            Oops!
            <p className="bg-gradient-to-t from-dark-blue via-sky-blue to-green bg-clip-text text-transparent">
              Page Not Found
            </p>
          </div>
          <p className="text-medium-gray mt-6">
            This is empty space. Nothing to be found here.
          </p>
          <Link href={'/'}>
            <div className="bg-green text-dark-gray rounded-xl font-bold mt-10 px-6 py-3 w-full text-center">
              {' '}
              Take me back
            </div>
          </Link>
        </div>
        <div className="flex whitespace-nowrap justify-between text-medium-gray w-full absolute bottom-8 px-4 lg:px-20">
          <p>Artificium.app © {new Date().getFullYear()}</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="w-3/5 bg-dark-gray relative hidden xl:flex justify-end">
        <div className="relative flex flex-col fixed w-full h-full">
          <Image
            src={bgImage}
            alt="bg"
            className="absolute right-0 h-screen w-fit"
          />
        </div>
      </div>{' '}
    </div>
  )
}
