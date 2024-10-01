import MobileNav from './MobileNav'
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import ButtonDarkMode from './btnDarkMode/ButtonDarkMode'
import logo from '@/public/tirthadeva-96.png'

const Header = () => {
  return (
    <header>
      <div className="nav-area flex items-center justify-between mx-0 my-auto py-3 w-full px-3 xl:px-20 shadow-sm shadow-slate-300 bg-indigo-500 dark:bg-gray-800 text-gray-200 dark:text-gray-800">
        <div className="flex items-center">
          <Link href="/" className="logo">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="logo"
              className="h-10 w-10 rounded-lg border border-gray-50"
            />
          </Link>
        </div>
        {/* for large screens */}
        <Navbar />
        {/* for small screens */}
        <MobileNav />
        <ButtonDarkMode />
      </div>
    </header>
  )
}

export default Header
