'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { menuItemsData } from '@/helpers/menuItemsData'
import MobileMenuItems from './MobileMenuItems'
import tilaka from '@/public/Tilaka/shiva-tilaka.png'

const MobileNav = () => {
  const depthLevel = 0
  const [showMenu, setShowMenu] = useState(false)
  let ref = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [showMenu])

  const toggleNavBar = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="mobile-nav z-50">
      <button
        className="mobile-nav__menu-button relative bg-transparent text-inherit cursor-pointer border-none"
        type="button"
        onClick={toggleNavBar}
      >
        <Image
          src={tilaka}
          width={36}
          height={36}
          alt="menu"
          className="h-10 w-10 rounded-lg"
        />
      </button>

      {showMenu && (
        <ul
          className="menus absolute top-20 left-1 rounded-lg w-[98%] md:w-[99%] border text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"
          // ref={ref}
        >
          {menuItemsData.map((menu, index) => {
            return (
              <MobileMenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            )
          })}
        </ul>
      )}
    </nav>
  )
}

export default MobileNav
