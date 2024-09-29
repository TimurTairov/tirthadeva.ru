import Image from 'next/image'
import yogaasanaSVG from '@/public/SVG/yoga-asana.svg'

const Experience = () => {
  return (
    <div className="w-full mt-7 md:mt-10 lg:mt-20 p-3 lg:p-6 rounded-md">
      <div className="w-full flex items-center justify-center mt-5">
        <Image
          src={yogaasanaSVG}
          alt="Йог медитация"
          className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert"
        />
        <p className="titleMP text-center ">Мой опыт в йоге</p>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 mt-5">
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
          <p className="text-indigo-600 dark:text-emerald-400 titleMP">
            14 лет
          </p>
          <p className=" textMP">личной практики йоги</p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
          <p className="text-indigo-600 dark:text-emerald-400 titleMP">9 лет</p>
          <p className=" textMP">ежедневных медитаций</p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
          <p className="text-indigo-600 dark:text-emerald-400 titleMP">8 лет</p>
          <p className=" textMP">преподавания йоги</p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
          <p className="text-indigo-600 dark:text-emerald-400 titleMP">
            2 000+
          </p>
          <p className=" textMP">проведённых занятий по йоге</p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
          <p className="text-indigo-600 dark:text-emerald-400 titleMP">50+</p>
          <p className=" textMP">пройденных семинаров</p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
          <p className="text-indigo-600 dark:text-emerald-400 titleMP">20+</p>
          <p className=" textMP">пройденных ретритов</p>
        </div>
      </div>
    </div>
  )
}

export default Experience
