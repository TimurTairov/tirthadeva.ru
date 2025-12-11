'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Dropdown from './Dropdown'
// import { FaCaretDown } from 'react-icons/fa'
// import { FaCaretUp } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi2'
import { HiChevronUp } from 'react-icons/hi2'

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

  // const onMouseEnter = () => {
  //   setDropdown(true)
  // }

  const onMouseLeave = () => {
    setDropdown(false)
  }

  const closeDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <li
      className="relative p-2 rounded-sm text-neutral-600 dark:text-neutral-50 bg-neutral-100 dark:bg-gray-700 hover:bg-neutral-200 dark:hover:text-gray-200 dark:hover:bg-gray-500 transition-all duration-500 ease-in-out"
      ref={ref}
      // onMouseEnter={onMouseEnter}
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
              className=" text-neutral-600 dark:text-gray-200 dark:hover:text-gray-200 transition-all duration-500 ease-in"
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
            {dropdown ? <HiChevronUp /> : <HiChevronDown />}
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
              className="w-full transition-all duration-500 ease-in-out"
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
