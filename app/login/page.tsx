'use client'

import logo from '../../public/logo.svg'
import bgImage from '../../public/login-bg.png'
import mail from '../../public/mail.svg'
import key from '../../public/key.svg'
import Image from 'next/image'
import Link from 'next/link'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useRouter} from 'next/navigation'
import {useAtom} from 'jotai'
import {accessed} from '../atom'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
})

type SignUpSchemaType = z.infer<typeof schema>

export default function LoginPage() {
  const router = useRouter()

  const [entered, setEntered] = useAtom(accessed)

  const handleAccess = () => {
    setEntered(!entered)
  }

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpSchemaType>({resolver: zodResolver(schema)})

  const notify = () => {
    toast('Congrats! You are on the list!', {
      closeButton: false,
    })
    handleAccess()
    setTimeout(() => {
      router.push('/')
    }, 1500)
  }
  const onSubmit = handleSubmit(notify)

  return (
    <div className="absolute left-0 bg-dark-gray flex justify-between w-full min-h-screen fade-in">
      <div className="relative flex flex-col items-start w-full min-h-screen bg-dark-gray sm:pb-0">
        <Link href={'/'} className="flex mb-4 mt-12 ml-4 lg:ml-12">
          <Image src={logo} alt="logo" className="w-8" />
        </Link>
        <form
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto w-full lg:px-10 mb-20 px-4"
        >
          <div className="flex gap-x-2 text-3xl text-white font-bold mt-12">
            Lets get{' '}
            <p className="bg-gradient-to-t from-dark-blue via-sky-blue to-green bg-clip-text text-transparent">
              creative!
            </p>
          </div>
          <p className="text-medium-gray mt-6">
            Log in to Artificium to start creating magic.
          </p>
          <div className="flex flex-col gap-y-6 mt-16">
            <label className="group">
              <div className="rounded-xl bg-gradient-to-r from-sky-blue to-green group-focus-within:p-[1px]">
                <div className="flex bg-deep-gray border border-medium-gray rounded-xl py-3 px-4">
                  <Image src={mail} alt="email" />
                  <input
                    type="email"
                    className="bg-deep-gray w-full px-3 text-white"
                    placeholder="Email"
                    {...register('email')}
                  />
                </div>
              </div>
              {errors?.email && (
                <p className="text-sky-blue mt-2">{errors.email.message}</p>
              )}
            </label>
            <label className="group">
              <div className="w-full rounded-xl bg-gradient-to-r from-sky-blue to-green group-focus-within:p-[1px]">
                <div className="flex bg-deep-gray border border-medium-gray rounded-xl py-3 px-4">
                  <Image src={key} alt="password" />
                  <input
                    type="password"
                    className="bg-deep-gray w-full px-3 text-white"
                    placeholder="Password"
                    {...register('password')}
                  />
                </div>
              </div>
              {errors?.password && (
                <p className="text-sky-blue mt-2">{errors.password.message}</p>
              )}
            </label>
          </div>
          <p className="text-base bg-gradient-to-t from-sky-blue to-green bg-clip-text text-transparent mt-8">
            Note: We will only send you neccessary mail.
          </p>
          <button
            type="submit"
            className="bg-green text-dark-gray rounded-xl font-bold mt-10 px-6 py-3 w-full"
          >
            Join the Waitlist
          </button>
        </form>
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
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  )
}
