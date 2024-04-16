'use client'

import Link from 'next/link'
import logo from '../../public/logo.json'
import Lottie from 'lottie-react'
import {usePathname} from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col md:flex-row justify-between text-xl font-medium">
      <Link href={'/'}>
        <Lottie animationData={logo} loop={false} className="w-48 -ml-6" />
      </Link>
      <div className="flex mt-4 md:mt-0 gap-x-4 p-0 bg-gradient-to-r from-sky-blue to-green bg-clip-text text-transparent">
        <Link
          href={'/'}
          className={
            pathname === '/'
              ? 'bg-gradient-to-t from-sky-blue to-green rounded-xl px-4 text-dark-gray h-fit pt-1 pb-1.5'
              : 'px-4 h-fit pt-1 pb-1.5'
          }
        >
          Home
        </Link>
        <Link
          href={'/favorites'}
          className={
            pathname === '/favorites'
              ? 'bg-gradient-to-r from-sky-blue to-green rounded-xl px-4 text-dark-gray h-fit pt-1 pb-1.5'
              : 'px-4 h-fit pt-1 pb-1.5'
          }
        >
          Favorites
        </Link>
      </div>
    </div>
  )
}
