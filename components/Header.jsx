import MobileNav from './MobileNav'
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import ButtonDarkMode from './btnDarkMode/ButtonDarkMode'
import logo from '@/public/logo.jpg'

const Header = () => {
  return (
    <header>
      <div className="nav-area w-full lg:px-20 shadow-sm shadow-slate-300 bg-white dark:bg-gray-800 text-gray-200 dark:text-gray-800">
        <Link href="/" className="logo">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
            className="h-11 w-11 rounded-full border border-yellow-500"
          />
        </Link>
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
