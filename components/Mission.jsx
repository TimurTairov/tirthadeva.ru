import Image from 'next/image'
import lotusSVG from '@/public/SVG/lotus-1.svg'
import omGif from '@/public/om.gif'

const Mission = () => {
  return (
    <div className="mt-7 md:mt-10 lg:mt-20 flex flex-col items-center w-full rounded-lg p-3 lg:p-6">
      <div className="w-full flex items-center justify-center mt-5">
        <Image
          src={lotusSVG}
          alt="лотос"
          loading="lazy"
          className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600  dark:invert"
        />
        <h5 className="titleMP text-center">Миссия</h5>
      </div>

      <div className="w-full flex xl:flex-row flex-col items-start justify-center gap-1 md:gap-3 lg:gap-5 mt-3">
        <div className="subTitleMP w-full flex items-center  rounded-lg p-3 xl:p-6 dark:bg-slate-700">
          <Image
            src={omGif}
            width={30}
            height={30}
            alt="om"
            loading="lazy"
            className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5"
          />
          <p>Cлужение Высшим идеалам йоги (Гуру, Дхарме и Cангхе)</p>
        </div>
        <div className="subTitleMP w-full flex items-center rounded-lg p-3 xl:p-6 dark:bg-slate-700">
          <Image
            src={omGif}
            width={30}
            height={30}
            alt="om"
            loading="lazy"
            className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5"
          />
          <p>Помощь всем живым существам в преодолении неведения</p>
        </div>
        <div className="subTitleMP w-full flex items-center rounded-lg p-3 xl:p-6 dark:bg-slate-700">
          <Image
            src={omGif}
            width={30}
            height={30}
            alt="om"
            loading="lazy"
            className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5"
          />
          <p>Распространение традиционных знаний йоги</p>
        </div>
      </div>
    </div>
  )
}

export default Mission
