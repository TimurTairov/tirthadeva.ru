'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { menuItemsData } from '@/helpers/menuItemsData'
import MobileMenuItems from './MobileMenuItems'
import menuSvg from '@/public/SVG/icons8-menu.svg'

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

  return (
    <nav className="mobile-nav">
      <button
        className="mobile-nav__menu-button"
        type="button"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <Image src={menuSvg} alt="menu" width={36} height={36} />
      </button>

      {showMenu && (
        <ul className="menus" ref={ref}>
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
