import Link from 'next/link'

const NavigationButton = ({ title, link }) => {
  return (
    <div className="flex w-full justify-center">
      <Link
        href={link}
        className="mt-4 rounded border border-indigo-600 bg-indigo-600 dark:border-emerald-500 dark:bg-emerald-500 px-12 py-3 text-center text-sm font-medium text-white dark:text-gray-50 hover:bg-transparent hover:text-indigo-600 dark:hover:text-emerald-500 dark:hover:bg-transparent focus:outline-none focus:ring active:text-indigo-500 dark:active:text-emerald-500 sm:mt-6"
      >
        {title}
      </Link>
    </div>
  )
}

export default NavigationButton
