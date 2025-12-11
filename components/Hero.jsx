import Image from 'next/image'
import { FaOm } from 'react-icons/fa6'
import { LiaPrayingHandsSolid } from 'react-icons/lia'
import myPhoto from '@/public/myPhoto-1.webp'
import NavigationButton from '@/components/NavigationButton'
import guru96 from '@/public/guru-96.webp'
import tirthadeva96 from '@/public/tirthadeva-96.webp'
import om96 from '@/public/om-96-2.webp'
import MyPhoto from '@/components/MyPhoto'

const Hero = ({ title, foto = myPhoto }) => {
  return (
    <div className="w-full flex lg:flex-row flex-col justify-around md:mt-5 lg:mt-10 xl:mt-20">
      <div className="flex flex-col items-center justify-between mt-5 lg:mt-0">
        <div className="flex flex-col justify-center">
          <h1 className="titleMP text-center">{title}</h1>
          <h2 className="text-xs md:text-base text-center">
            с опытным преподавателем
          </h2>
        </div>

        <div>
          <div className="mt-5 flex items-center justify-center gap-2">
            <FaOm className="text-indigo-500 dark:text-gray-200" />
            <h5 className="textMP">Намастэ</h5>
            <LiaPrayingHandsSolid className=" text-indigo-500 dark:text-gray-200" />
          </div>

          <div className="textMP w-full text-center">
            Меня зовут
            <b className="text-indigo-500 dark:text-gray-200 mx-2">
              Тиртхадева
            </b>
            (<span>Тимур Таиров</span>)
          </div>
        </div>

        <div className="mt-0 md:mt-5 lg:mt-5 xl:mt-0 flex flex-col items-start justify-center gap-1 lg:gap-2 p-6 lg:p-3 xl:p-6 xl:gap-5 ">
          <div className="w-full flex items-center rounded-lg p-1 dark:bg-slate-700">
            <Image
              src={guru96}
              alt="guru"
              className="h-full w-auto rounded-lg mr-2 border-2"
            />
            <p className="herotitle">Ученик просветленного мастера</p>
          </div>
          <div className="w-full flex items-center rounded-lg p-1 dark:bg-slate-700">
            <Image
              src={tirthadeva96}
              alt="guru"
              className="h-full w-auto rounded-lg mr-2 border-2"
            />
            <p className="herotitle">Преподаватель йоги и медитации</p>
          </div>
          <div className="w-full flex items-center  rounded-lg p-1 dark:bg-slate-700">
            <Image
              src={om96}
              alt="guru"
              className="h-full w-auto rounded-lg  mr-2 border-2"
            />
            <p className="herotitle">Ваш наставник на пути йоги и дхармы</p>
          </div>
        </div>
        <NavigationButton
          title={'Начать практику йоги'}
          link={'/yoga/yogaonline'}
        />
      </div>

      <MyPhoto foto={foto} />
    </div>
  )
}

export default Hero
