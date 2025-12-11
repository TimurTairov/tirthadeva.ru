import { FaArrowTurnUp } from 'react-icons/fa6'

const GoToTop = ({ url }) => {
  return (
    <div className="mt-10 lg:mt-20 w-full flex justify-end">
      <a
        href={url}
        className="flex items-center subTitleMP border-2 p-3 rounded-full font-bold bg-slate-50 hover:bg-white hover:border-indigo-700 dark:hover:border-emerald-400 dark:bg-gray-700"
      >
        <FaArrowTurnUp className="size-6" />
      </a>
    </div>
  )
}

export default GoToTop
