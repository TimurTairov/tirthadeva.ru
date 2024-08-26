import MobileNav from './MobileNav'
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import BtnDarkMode from '@/components/btnDarkMode/BtnDarkMode'
import logo from '@/public/SVG/logo.svg'

const Header = () => {
  return (
    <header>
      <div className="nav-area w-full lg:px-20">
        <Link href="/" className="logo">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
            className="h-10 w-10"
          />
        </Link>
        {/* for large screens */}
        <Navbar />
        {/* for small screens */}
        <MobileNav />
        <BtnDarkMode />
      </div>
    </header>
  )
}

export default Header
