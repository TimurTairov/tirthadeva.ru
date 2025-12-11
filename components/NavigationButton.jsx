import Link from 'next/link'

const NavigationButton = ({ title, link }) => {
  return (
    <div className="flex w-full justify-center">
      <Link
        href={link}
        // className=" rounded-full border border-indigo-600 bg-indigo-600 dark:border-emerald-500 dark:bg-emerald-500 px-12 py-4 text-center text-sm font-medium text-white dark:text-gray-50 hover:bg-transparent hover:text-indigo-600 dark:hover:text-emerald-500 dark:hover:bg-transparent focus:outline-none focus:ring active:text-indigo-500 dark:active:text-emerald-500 sm:mt-6 flare-button"
        className="flare-button text-white dark:text-white hover:bg-white  dark:hover:text-indigo-700 bg-amber-400 transition duration-300 ease-in"
      >
        {title}
      </Link>
    </div>
  )
}

export default NavigationButton
