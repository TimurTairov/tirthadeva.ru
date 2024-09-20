"use client"
import Image from "next/image"
import Link from "next/link"
import Gradient from "@/components/Gradient"
import myPhoto from '@/public/04.jpg'
import nataraja from '@/public/nataraja.png'
import yog1 from '@/public/yog1.png'
import yog4 from '@/public/yog4.png'
import yog5 from '@/public/yog5.png'
import yog6 from '@/public/yog6.png'
import hatha from '@/public/hatha2.jpg'
import kundalini from '@/public/kundalini.jpg'
import meditation from '@/public/meditation.jpg'
import guru96 from '@/public/guru-96.png'
import tirthadeva96 from '@/public/tirthadeva-96.png'
import om96 from '@/public/om-96-2.png'
import omGif from '@/public/om.gif'
import { BiLogoZoom } from "react-icons/bi"
import { GrSchedule } from "react-icons/gr"
import { LiaPrayingHandsSolid } from "react-icons/lia"
import { settings } from "@/helpers/FotoSettengs"
import { FaOm } from "react-icons/fa6"
import VideoPlayer from '@/components/VideoPlayer'
import Price from '@/components/Price'
import meditationSVG from '@/public/SVG/meditation.svg'
import lotusSVG from '@/public/SVG/lotus.svg'
import yogaasanaSVG from '@/public/SVG/yoga-asana.svg'
import yogaasana2SVG from '@/public/SVG/yoga-asana2.svg'
import video2SVG from "@/public/SVG/video-streaming.svg"


export default function Home() {

  return (
    <main className="max-w-screen-xl xl:mx-auto mx-2 flex flex-col items-center justify-center">
      <Gradient />

      <div className="w-full flex lg:flex-row flex-col justify-between mt-5">

        <div className="rounded-lg shadow-sm flex flex-col items-center justify-end ">
          <div className="mt-5 md:mt-10 lg:mt-0">

            <div className="flex items-center justify-center gap-2">
              <FaOm width={40} height={40} className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              <h1 className="titleMP  mx-2">Намастэ</h1>
              <LiaPrayingHandsSolid width={30} height={30} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </div>

            <div className="subTitleMP mt-5 w-full text-center">
              <p>Вас приветствует <b>Тиртхадэва</b></p>
              <p>В миру <b>Тимур Таиров</b></p>
            </div>

            <div className='mt-10 lg:mt-5 xl:mt-10 flex flex-col items-start justify-center gap-5 p-6 lg:p-4 xl:p-6 lg:gap-5 rounded-lg '>
              <div className="w-full flex items-center rounded-lg p-3 dark:bg-slate-700">
                <Image src={guru96} alt="guru" className="h-full w-auto rounded-lg mr-2 border-2" />
                <p className="textMP">Ученик просветленного мастера</p>
              </div>
              <div className="textMP w-full flex items-center rounded-lg p-3 dark:bg-slate-700">
                <Image src={tirthadeva96} alt="guru" className="h-full w-auto rounded-lg mr-2 border-2" />
                <p className="textMP">Преподаватель йоги и медитации</p>
              </div>
              <div className="textMP w-full flex items-center  rounded-lg p-3 dark:bg-slate-700">
                <Image src={om96} alt="guru" className="h-full w-auto rounded-lg  mr-2 border-2" />
                <p className="textMP">Ваш наставник на пути йоги и дхармы</p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col justify-center mt-5 lg:mt-0">
          <Image src={myPhoto} width={500} height={500} priority alt="my foto" className="w-full h-auto xl:h-[40rem] xl:w-[40rem] p-1 rounded-lg my-foto shadow-md dark:shadow-white shadow-gray-800" />
        </div>

      </div>

      <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col items-center w-full rounded-lg p-3 lg:p-6 shadow-sm">

        <div className="w-full flex items-center justify-center mt-5">
          <Image src={lotusSVG} alt="Йог медитация" className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600  dark:invert" />
          <h5 className="titleMP text-center">Моя миссия</h5>
        </div>

        <div className='w-full flex xl:flex-row flex-col items-start justify-center gap-4 md:gap-6 mt-3 xl:mt-0'>
          <div className="textMP w-full flex items-center  rounded-lg p-3 lg:p-6 dark:bg-slate-700">
            <Image src={omGif} width={30} height={30} alt="om" className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5" />
            <p>Cлужение Высшим идеалам йоги (Гуру, Дхарме и Cангхе)</p>
          </div>
          <div className="textMP w-full flex items-center rounded-lg p-3 lg:p-6 dark:bg-slate-700">
            <Image src={omGif} width={30} height={30} alt="om" className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5" />
            <p>Помощь всем живым существам в преодолении неведения</p>
          </div>
          <div className="textMP w-full flex items-center rounded-lg p-3 lg:p-6 dark:bg-slate-700">
            <Image src={omGif} width={30} height={30} alt="om" className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5" />
            <p>Распространение истинных знаний йоги</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-6 md:mt-12 lg:mt-20 p-3 lg:p-6 rounded-lg shadow-sm">

        <div className="w-full flex items-center justify-center mt-5">
          <Image src={meditationSVG} alt="Йог медитация" className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert" />
          <h5 className="titleMP text-center">Направления йоги</h5>
        </div>

        <div className="w-full flex xl:flex-row flex-col gap-4 md:gap-6 mt-5 justify-center">
          <div className="flex items-start rounded-md w-full h-40 xl:w-96 dark:bg-slate-700">
            <Image src={hatha} alt="Хатха йога" className="h-full w-auto rounded-md" />
            <div className="w-full h-full flex flex-col items-center">
              <p className="w-full text-center subTitleMP">Хатха йога сиддхов</p>
              <div className="h-full flex flex-col justify-around">
                <p className="ml-1 textMP">Гибкость</p>
                <p className="ml-1 textMP">Сила</p>
                <p className="ml-1 textMP">Долголетие</p>
              </div>
            </div>
          </div>
          <div className="flex items-start rounded-md w-full h-40 xl:w-96 dark:bg-slate-700">
            <Image src={kundalini} alt="Кундалини йога" className="h-full w-auto rounded-md" />
            <div className="w-full h-full flex flex-col items-center">
              <p className="w-full text-center subTitleMP">Кундалини йога сиддхов</p>
              <div className="h-full flex flex-col justify-around">
                <p className="ml-1 textMP">Энергия</p>
                <p className="ml-1 textMP">Детоксикация</p>
                <p className="ml-1 textMP">Здоровье</p>
              </div>
            </div>
          </div>
          <div className="flex items-center rounded-md xl:w-96 w-full h-40 dark:bg-slate-700">
            <Image src={meditation} alt="Медитация" className="h-full w-auto rounded-md" />
            <div className="w-full h-full flex flex-col items-center">
              <p className="w-full text-center subTitleMP">Медитация сиддхов</p>
              <div className="h-full flex flex-col justify-around">
                <p className="ml-1 textMP">Спокойствие</p>
                <p className="ml-1 textMP">Осознанность</p>
                <p className="ml-1 textMP">Просветление</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-5 md:mt-10 lg:mt-20 p-3 lg:p-6 rounded-md shadow-sm ">

        <div className="w-full flex items-center justify-center mt-5">
          <Image src={yogaasanaSVG} alt="Йог медитация" className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert" />
          <p className="titleMP text-center ">Мой опыт в йоге</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 mt-5">
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">14 лет</p>
            <p className=" textMP">личной практики йоги</p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">9 лет</p>
            <p className=" textMP">ежедневных медитаций</p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">8 лет</p>
            <p className=" textMP">преподавания йоги</p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">2000+</p>
            <p className=" textMP">проведённых занятий по йоге</p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">50+</p>
            <p className=" textMP">пройденных семинаров</p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">20+</p>
            <p className=" textMP">пройденных ретритов</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-5 md:mt-10 lg:mt-20 p-3 lg:p-6 rounded-md shadow-sm ">

        <div className="w-full flex items-center justify-center mt-5">
          <Image src={yogaasana2SVG} alt="Йог медитация" className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert" />
          <h5 className="titleMP text-center">Как я преподаю йогу</h5>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 mt-5">
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP ">Делаю акцент на гармонию, созерцание и осознанность</p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP">Даю асаны в статике, в легком медитативном состоянии</p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP">Обьясняю разные вариации асан, в зависимости от уровня подготовки практикующих </p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP">Исключаю крайности: позы йоги не должны быть слишком сложными или слишком лёгкими</p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP">Чередую напряжение и расслабление: даю небольшой отдых между асанами</p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP">Рекомендую выходить из асан самостоятельно, если есть в этом необходимость</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-5 md:mt-10 lg:mt-20 p-3 lg:p-6 rounded-md shadow-sm ">
        <div className="w-full flex items-center justify-center mt-5">
          <Image src={video2SVG} alt="Йог медитация" className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert" />
          <h5 className="titleMP text-center">Йога онлайн</h5>
        </div>

        <p className="textMP mt-5 ml-2">Йога онлайн это возможность практиковать йогу из дома, либо из любой точки планеты. Совсем необязательно, чтобы практикующие физически находились в одном зале с учителем. </p>

        <div className="grid grid-cols-2 grid-rows-2 mt-5 ">
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <BiLogoZoom className="mr-2 text-indigo-600 dark:text-emerald-400  titleMP" />
            <p className=" textMP">трансляции через <b>Zoom</b></p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6rounded-md m-1 items-start justify-center">
            <GrSchedule className="mr-2 text-indigo-600 dark:text-emerald-400  titleMP" />
            <p className=" textMP">удобное расписание</p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className="mr-2 text-indigo-600 dark:text-emerald-400  titleMP">4 года </p>
            <p className=" textMP">преподавания йоги онлайн</p>
          </div>
          <div className="flex flex-col bg-gray-100 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className="mr-2 text-indigo-600 dark:text-emerald-400  titleMP">3 занятия </p>
            <p className=" textMP">БЕСПЛАТНО*</p>
          </div>
        </div>

        <p className="mt-5 text-xs ml-2">* - только для новых учеников </p>
      </div>

      <Price />

      <div className="w-full flex justify-center ml-7 md:ml-20 xl:ml-40">
        <div className='mt-5 md:mt-10 lg:mt-20 p-2 w-full grid grid-cols-2 grid-row-4 md:grid-cols-4 md:grid-rows-2'>
          <Link href="/osebe/education" className="m-1">Образование</Link>
          <Link href="/osebe/certificates" className="m-1">Сертификаты</Link>
          <Link href="/yoga/feedbacks" className="m-1">Отзывы</Link>
          <Link href="/osebe/contacts" className="m-1">Контакты</Link>
          <Link href="/tradition/master" className="m-1">Мастер</Link>
          <Link href="/tradition/links" className="m-1">Полезные ссылки</Link>
          <Link href="/yoga/basicrules" className="m-1">Хатха йога</Link>
          <Link href="/yoga/nauli" className="m-1">Наули</Link>
        </div>

      </div>

      <div className='mt-5 md:mt-10 lg:mt-20 flex items-end justify-around w-full'>
        <Image src={yog1} width={108} height={108} alt="yog 1" />
        <Image src={yog5} width={95} height={95} alt="yog 2" />
        <Image src={nataraja} width={115} height={115} alt="Lord Shiva Nataraja" />
        <Image src={yog6} width={95} height={95} alt="yog 3" />
        <Image src={yog4} width={108} height={108} alt="yog 4" />
      </div>


    </main >
  )
}
