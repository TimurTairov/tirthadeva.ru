import Image from 'next/image'
import Steps from '@/components/Steps'
import meditationSVG from '@/public/SVG/meditation.svg'
import hatha from '@/public/hatha2.jpg'
import kundalini from '@/public/kundalini.jpg'
import meditation from '@/public/meditation.jpg'

const YogaDirections = () => {
  return (
    <div className="w-full mt-5 md:mt-10 lg:mt-20 p-3 lg:p-6 rounded-lg">
      <div className="w-full flex items-center justify-center mt-5">
        <Image
          src={meditationSVG}
          alt="Йог медитация"
          className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert"
        />
        <h5 className="titleMP text-center">Направления йоги</h5>
      </div>

      <div className="w-full flex xl:flex-row flex-col gap-4 md:gap-6 mt-5 justify-center">
        <div className="flex items-start border rounded-md w-full h-44 xl:w-96 bg-gray-50 dark:bg-slate-700">
          <Image
            src={hatha}
            alt="Хатха йога"
            className="h-full w-auto rounded-md"
          />
          <div className="w-full h-full flex flex-col items-center">
            <p className="w-full text-center subTitleMP">Хатха йога сиддхов</p>
            <div className="h-full flex flex-col justify-around">
              <Steps step1={'Гибкость'} step2={'Сила'} step3={'Долголетие'} />
            </div>
          </div>
        </div>
        <div className="flex items-start border rounded-md w-full h-44 xl:w-96 bg-gray-50 dark:bg-slate-700">
          <Image
            src={kundalini}
            alt="Кундалини йога"
            className="h-full w-auto rounded-md"
          />
          <div className="w-full h-full flex flex-col items-center">
            <p className="w-full text-center subTitleMP">
              Кундалини йога сиддхов
            </p>
            <div className="h-full flex flex-col justify-around">
              <Steps
                step1={'Энергия'}
                step2={'Детоксикация'}
                step3={'Здоровье'}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center border rounded-md xl:w-96 w-full h-44 bg-gray-50 dark:bg-slate-700">
          <Image
            src={meditation}
            alt="Медитация"
            className="h-full w-auto rounded-md"
          />
          <div className="w-full h-full flex flex-col items-center">
            <p className="w-full text-center subTitleMP">Медитация сиддхов</p>
            <div className="h-full flex flex-col justify-around">
              <Steps
                step1={'Спокойствие'}
                step2={'Осознанность'}
                step3={'Просветление'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YogaDirections
