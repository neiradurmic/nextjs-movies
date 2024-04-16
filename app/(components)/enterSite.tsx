import logo from '../../public/logo.svg'
import bgImage from '../../public/bg-img.png'
import vertexia from '../../public/vertexia.png'
import users from '../../public/users.png'
import Image from 'next/image'
import logoAnimation from '../../public/logo.json'
import Lottie from 'lottie-react'
import Link from 'next/link'

type Props = {
  handleAccess: () => void
}

export default function EnterSite({handleAccess}: Props) {
  return (
    <div className="absolute left-0 bg-dark-gray flex justify-between w-full min-h-screen fade-in">
      <div className="relative flex flex-col items-center lg:items-start w-full min-h-screen bg-dark-gray sm:pb-0">
        <div className="flex items-start gap-x-4 mt-12 w-full">
          <div className="flex mb-4 ml-4 lg:ml-12">
            <Image src={logo} alt="logo" className="w-8" />
          </div>
          <div className="flex gap-x-4 ml-auto mr-6 text-center">
            <Link
              href={'/login'}
              className="text-base h-fit py-2 px-6 font-bold bg-gradient-to-t from-sky-blue to-green rounded-xl textwhi"
            >
              Join
            </Link>
          </div>
        </div>
        <div className="max-w-2xl mx-auto w-full lg:px-10 mb-20 px-4 text-center">
          <div className="flex mt-12 lg:mt-20 justify-center">
            <Image src={vertexia} alt="logo" className="w-20" />
          </div>
          <h1 className="flex flex-col lg:flex-row items-center gap-x-4 justify-center mt-4 mb-4 text-3xl font-black text-white tracking-wider text-center">
            <span>Artificium</span>
            <Lottie
              animationData={logoAnimation}
              loop={false}
              className="w-48 lg:-ml-6"
            />
          </h1>
          <p className="text-green text-base">movies.artficium.app</p>
          <button
            className="bg-green text-dark-gray rounded-xl font-bold mt-10 px-6 py-3"
            onClick={handleAccess}
          >
            <span className="animate-pulse">Enter Early Access</span>
          </button>
          <div className="flex flex-col lg:flex-row mt-12 lg:mt-24 justify-center gap-6 items-center">
            <div>
              <Image src={users} alt="users" className="w-64" />
            </div>
            <p className="text-medium-gray whitespace-nowrap">
              and 938 others have already joined
            </p>
          </div>
        </div>
        <div className="flex justify-between text-medium-gray w-full absolute bottom-8 px-4 lg:px-20">
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
