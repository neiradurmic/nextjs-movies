import type {Metadata} from 'next'
import {Mulish} from 'next/font/google'
import './globals.css'
import LayoutProvider from './LayoutProvider'

const mulish = Mulish({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Next.js Movies Database',
  description: 'Movies Database',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <LayoutProvider>
        <body className={mulish.className}>{children}</body>
      </LayoutProvider>
    </html>
  )
}
