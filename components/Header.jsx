import MobileNav from './MobileNav'
import Navbar from './Navbar'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className="nav-area w-full lg:px-20">
        <Link href="/" className="logo">
          Logo
        </Link>
        {/* for large screens */}
        <Navbar />
        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
