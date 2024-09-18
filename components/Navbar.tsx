import { menuItemsData } from '@/helpers/menuItemsData'
import MenuItems from './MenuItems'

const Navbar = () => {
  const depthLevel = 0
  return (
    <nav className="desktop-nav text-gray-800 dark:text-gray-200">
      <ul className="menus flex items-center flex-wrap text-xl">
        {menuItemsData.map((menu) => {
          return <MenuItems items={menu} key={menu.title} depthLevel={depthLevel} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar
