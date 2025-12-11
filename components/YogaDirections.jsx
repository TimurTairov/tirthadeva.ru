import Image from 'next/image'
import Steps from '@/components/Steps'
import meditationSVG from '@/public/SVG/meditation.svg'
import hatha from '@/public/hatha.webp'
import kundalini from '@/public/kundalini.webp'
import meditation from '@/public/meditation.webp'
import myPhoto from '@/public/BlogImages/01.webp'
import MyPhoto from '@/components/MyPhoto'

const YogaDirections = () => {
  return (
    <div className="w-full mt-20 lg:mt-40 flex lg:flex-row flex-col justify-around ">
      <div className="flex flex-col items-center justify-between">
        <div className="flex items-center justify-center">
          <Image
            src={meditationSVG}
            alt="Йог медитация"
            loading="lazy"
            className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert hoverIcon"
          />
          <h5 className="titleMP text-center">Направления йоги</h5>
        </div>

        <div className="flex flex-col gap-3 md:gap-5 mt-5 justify-center">
          <div className="flex items-start rounded-md w-full h-40 xl:w-140 bg-gray-50 dark:bg-slate-700 shadow-md">
            <Image
              src={hatha}
              alt="Хатха йога онлайн"
              loading="lazy"
              className="h-full w-auto rounded-md"
            />
            <div className="w-full h-full flex flex-col items-center">
              <p className="w-full text-center font-medium px-2">
                Хатха йога сиддхов
              </p>
              <div className="h-full flex flex-col justify-around">
                <Steps step1={'Гибкость'} step2={'Сила'} step3={'Долголетие'} />
              </div>
            </div>
          </div>
          <div className="flex items-start rounded-md w-full h-40 xl:w-140 bg-gray-50 dark:bg-slate-700 shadow-md">
            <Image
              src={kundalini}
              alt="Кундалини йога онлайн"
              loading="lazy"
              className="h-full w-auto rounded-md"
            />
            <div className="w-full h-full flex flex-col items-center">
              <p className="w-full text-center font-medium px-2">
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
          <div className="flex items-center  rounded-md w-full h-40 xl:w-140 bg-gray-50 dark:bg-slate-700 shadow-md">
            <Image
              src={meditation}
              alt="Медитация онлайн"
              loading="lazy"
              className="h-full w-auto rounded-md"
            />
            <div className="w-full h-full flex flex-col items-center">
              <p className="w-full text-center font-medium px-2">
                Медитация сиддхов
              </p>
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
      <MyPhoto foto={myPhoto} />
    </div>
  )
}

export default YogaDirections
