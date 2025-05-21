import Image from 'next/image'
import yogaasanaSVG from '@/public/SVG/yoga-asana.svg'

const Experience = () => {
  return (
    <div className="w-full mt-20 lg:mt-40 flex flex-col lg:flex-row-reverse justify-around ">
      <div className="xl:mx-5 w-full flex flex-col justify-between">
        <div className="flex items-center justify-center">
          <Image
            src={yogaasanaSVG}
            alt="Йог медитация онлайн"
            loading="lazy"
            className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert"
          />
          <p className="titleMP text-center ">Мой опыт в йоге</p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-2 mt-5 gap-3">
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-5 rounded-md">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">
              15 лет
            </p>
            <p className=" textMP">личной практики йоги</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-5 rounded-md">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">
              10 лет
            </p>
            <p className=" textMP">ежедневных медитаций</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-5 rounded-md">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">
              10 лет
            </p>
            <p className=" textMP">преподавания йоги</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-5 rounded-md">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">
              2 000+
            </p>
            <p className=" textMP">проведённых занятий по йоге</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-5 rounded-md">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">50+</p>
            <p className=" textMP">пройденных семинаров</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-5 rounded-md">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">20+</p>
            <p className=" textMP">пройденных ретритов</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
