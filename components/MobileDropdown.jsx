import MobileMenuItems from './MobileMenuItems'

const MobileDropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : ''

  return (
    <ul
      className={`dropdown bg-gray-50 rounded-md text-xs dark:bg-gray-700 ${dropdownClass} ${
        dropdown ? 'show' : ''
      }`}
    >
      {submenus.map((submenu, index) => (
        <MobileMenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  )
}

export default MobileDropdown
