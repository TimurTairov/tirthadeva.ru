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
    <nav className="mobile-nav ">
      <button
        className="mobile-nav__menu-button"
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
          className="menus text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800"
          ref={ref}
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
