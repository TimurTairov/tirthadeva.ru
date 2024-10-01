import { FaArrowTurnUp } from 'react-icons/fa6'

const GoToTop = ({ url }) => {
  return (
    <div className="mt-7 md:mt-10 lg:mt-20">
      <a
        href={url}
        className="flex items-center subTitleMP border-2 p-3 rounded-full font-bold bg-slate-50 hover:bg-white hover:border-indigo-700 dark:hover:border-emerald-400"
      >
        Наверх <FaArrowTurnUp className="ml-2" />
      </a>
    </div>
  )
}

export default GoToTop
