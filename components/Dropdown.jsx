import MenuItems from './MenuItems'

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : ''
  return (
    <ul
      className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''} 
      text-neutral-600 dark:text-neutral-50 bg-neutral-100 dark:bg-gray-700 hover:bg-neutral-200 dark:hover:text-gray-200 dark:hover:bg-gray-500`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  )
}

export default Dropdown
