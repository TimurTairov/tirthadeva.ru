import { menuItemsData } from '@/helpers/menuItemsData'
import MenuItems from './MenuItems'

const Navbar = () => {
  const depthLevel = 0
  return (
    <nav className="desktop-nav text-gray-800 dark:text-gray-200 transition-all ease-in-out duration-700">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar
