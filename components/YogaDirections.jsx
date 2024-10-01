import Image from 'next/image'
import Steps from '@/components/Steps'
import meditationSVG from '@/public/SVG/meditation.svg'
import hatha from '@/public/hatha.jpg'
import kundalini from '@/public/kundalini.jpg'
import meditation from '@/public/meditation.jpg'
import myPhoto from '@/public/01.jpg'
import MyPhoto from '@/components/MyPhoto'

const YogaDirections = () => {
  return (
    <div className="w-full mt-7 md:mt-10 lg:mt-20 p-3 lg:p-6 flex lg:flex-row flex-col justify-around ">
      <div>
        <div className="w-full flex items-center justify-center">
          <Image
            src={meditationSVG}
            alt="Йог медитация"
            loading="lazy"
            className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert"
          />
          <h5 className="titleMP text-center">Направления йоги</h5>
        </div>

        <div className="w-full flex flex-col gap-4 md:gap-6 mt-5 justify-center">
          <div className="flex items-start border rounded-md w-full h-44 xl:w-96 bg-gray-50 dark:bg-slate-700">
            <Image
              src={hatha}
              alt="Хатха йога онлайн"
              loading="lazy"
              className="h-full w-auto rounded-md"
            />
            <div className="w-full h-full flex flex-col items-center">
              <p className="w-full text-center subTitleMP">
                Хатха йога сиддхов
              </p>
              <div className="h-full flex flex-col justify-around">
                <Steps step1={'Гибкость'} step2={'Сила'} step3={'Долголетие'} />
              </div>
            </div>
          </div>
          <div className="flex items-start border rounded-md w-full h-44 xl:w-96 bg-gray-50 dark:bg-slate-700">
            <Image
              src={kundalini}
              alt="Кундалини йога онлайн"
              loading="lazy"
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
              alt="Медитация онлайн"
              loading="lazy"
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

      <MyPhoto foto={myPhoto} />
      {/* <div>
        <Image
          src={myPhoto}
          alt="my foto"
          loading="lazy"
          className="lg:mx-5 mt-10 lg:mt-0 xl:w-[40rem] rounded-3xl shadow-xl shadow-slate-400 dark:shadow-emerald-400"
        />
      </div> */}
    </div>
  )
}

export default YogaDirections
