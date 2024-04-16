import {ChangeEventHandler} from 'react'
import {LuSearch} from 'react-icons/lu'

type Props = {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

export default function SearchBar({value, onChange}: Props) {
  return (
    <div className="flex mt-2">
      <div className="relative border border-green rounded-lg w-full lg:w-fit">
        <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-dark-blue via-sky-blue to-green opacity-50 blur"></div>
        <div className="relative flex bg-slate-900 items-center rounded-lg px-4 gap-4">
          <LuSearch className="text-2xl text-white" />
          <input
            className="relative flex h-14 w-full lg:w-96 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
            placeholder="Search movies and tv shows"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}
