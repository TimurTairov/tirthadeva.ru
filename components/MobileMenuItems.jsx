'use client'
import { useState } from 'react'
import Link from 'next/link'
import MobileDropdown from './MobileDropdown'

const MobileMenuItems = ({ items, depthLevel, showMenu, setShowMenu }) => {
  const [dropdown, setDropdown] = useState(false)

  const closeDropdown = () => {
    dropdown && setDropdown(false)
    showMenu && setShowMenu(false)
  }

  const toggleDropdown = (e) => {
    e.stopPropagation()
    setDropdown((prev) => !prev)
  }

  return (
    <li className="menu-items" onClick={closeDropdown}>
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
          >
            <Link href={items.url} onClick={closeDropdown}>
              {items.title}
            </Link>
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
          >
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <>
                  {items.title} <span className="arrow-close" />
                </>
              ) : (
                <>
                  {items.title} <span className="arrow" />
                </>
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
    </li>
  )
}

export default MobileMenuItems
