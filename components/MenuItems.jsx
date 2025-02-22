'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Dropdown from './Dropdown'
import { FaCaretDown } from 'react-icons/fa'
import { FaCaretUp } from 'react-icons/fa'

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false)
  let ref = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])

  const onMouseEnter = () => {
    setDropdown(true)
  }

  const onMouseLeave = () => {
    setDropdown(false)
  }

  const closeDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <li
      className="relative p-2 rounded-md text-gray-50 bg-indigo-500 dark:bg-gray-800 hover:bg-indigo-400 hover:text-gray-100 dark:hover:text-gray-200 dark:hover:bg-gray-600 transition-all duration-500 ease-in-out"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && !items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
          >
            <Link
              className="px-3 py-4 text-gray-50 dark:text-gray-200 hover:text-gray-100 dark:hover:text-gray-200 transition-all duration-500 ease-in"
              href={items.url}
            >
              {items.title}{' '}
            </Link>
          </button>
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
            className="flex items-center gap-1"
          >
            {items.title}
            {dropdown ? <FaCaretUp /> : <FaCaretDown />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <>
          <div>
            <Link
              href={items.url}
              className="w-full px-3 py-4  transition-all duration-500 ease-in-out"
            >
              {items.title}
            </Link>
          </div>
        </>
      )}
    </li>
  )
}

export default MenuItems
