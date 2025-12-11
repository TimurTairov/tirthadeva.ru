import Image from 'next/image'
import { BiLogoZoom } from 'react-icons/bi'
import { GrSchedule } from 'react-icons/gr'
import video2SVG from '@/public/SVG/video-streaming.svg'
// import NavigationButton from '@/components/NavigationButton'

const YogaOnline = () => {
  return (
    <div className="w-full mt-20 lg:mt-40 rounded-md">
      <div className="w-full flex items-center justify-center">
        <Image
          src={video2SVG}
          alt="video svg"
          loading="lazy"
          className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert hoverIcon"
        />
        <h5 className="titleMP text-center">Йога онлайн</h5>
      </div>

      <p className="textMP mt-5 bg-gray-50 dark:bg-slate-700 p-3 rounded-md shadow-md text-center">
        Йога онлайн это возможность практиковать йогу из дома, либо из любой
        точки планеты. Совсем необязательно, чтобы практикующие физически
        находились в одном зале с учителем.
      </p>

      <div className="grid grid-cols-2 grid-rows-2 mt-3 gap-3 md:gap-5">
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center gap-3 shadow-md">
          <BiLogoZoom className="mr-2 text-indigo-600 dark:text-emerald-400  titleMP" />
          <p className=" textMP">
            трансляции через <b>Zoom</b> и <b>Яндекс Телемост</b>
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center gap-3 shadow-md">
          <GrSchedule className="mr-2 text-indigo-600 dark:text-emerald-400 titleMP" />
          <p className=" textMP">удобное расписание</p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center gap-3 shadow-md">
          <p className="mr-2 text-indigo-600 dark:text-emerald-400  titleMP">
            более 5 лет{' '}
          </p>
          <p className=" textMP">опыт преподавания занятий онлайн</p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center gap-3 shadow-md">
          <p className="mr-2 text-indigo-600 dark:text-emerald-400  titleMP">
            3 занятия{' '}
          </p>
          <div>
            <p className="textMP">БЕСПЛАТНО</p>
            <p className="text-xs">для новых участников </p>
          </div>
        </div>
      </div>

      {/* <p className="mt-1 text-xs ml-2">* - только для новых учеников </p> */}

      <div className="mt-5 w-full flex justify-center">
        <a
          href="https://chat.whatsapp.com/KEhgTrh2bJu3PP6jgiY2T5"
          target="_blank"
          rel="noreferrer"
          className="flare-button text-white dark:text-white hover:bg-white  dark:hover:text-indigo-700 bg-amber-400 transition duration-300 ease-in"
        >
          Практиковать йогу онлайн
        </a>
      </div>
    </div>
  )
}

export default YogaOnline
