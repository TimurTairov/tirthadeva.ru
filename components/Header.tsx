"use client"
import MobileNav from './MobileNav'
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import ThemeChanger from './DarkSwitch'
import logo from '@/public/myPhoto-2.webp'

const Header = () => {
  return (
    <header className="flex items-center justify-between mx-0 my-auto py-3 w-full px-3 xl:px-20 shadow-slate-300 bg-neutral-50 dark:bg-gray-800 text-neutral-50 dark:text-neutral-600">
      <div className="">
        <Link href="/" className="logo flex items-center gap-1">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
            priority
            className="h-10 w-10 rounded-lg border border-gray-50"
          />
          <p className="hidden md:block text-neutral-600 dark:text-neutral-50">
            Тиртхадева
          </p>
        </Link>
      </div>
      {/* for large screens */}
      <Navbar />
      {/* for small screens */}
      <MobileNav />
      <ThemeChanger />
    </header>
  )
}

export default Header
