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
import { LiaPrayingHandsSolid } from "react-icons/lia"
import { FaOm } from "react-icons/fa6"
import Price from '@/components/Price'
import meditationSVG from '@/public/SVG/meditation.svg'
import lotusSVG from '@/public/SVG/lotus-1.svg'
import yogaasanaSVG from '@/public/SVG/yoga-asana.svg'
import yogaasana2SVG from '@/public/SVG/yoga-asana2.svg'
import Steps from "@/components/Steps"
import NavigationButton from "@/components/NavigationButton"
import Testimonial from '@/components/Testimonial'
import YogaOnline from "@/components/YogaOnline"
import MyGurus from "@/components/MyGurus"

export default function Home() {

  return (
    <main className="max-w-screen-xl xl:mx-auto mx-2 flex flex-col items-center justify-center">
      <Gradient />

      <div className="w-full flex lg:flex-row flex-col justify-around mt-5">

        <div className="rounded-lg flex flex-col items-center justify-end ">
          <div className="mt-5 md:mt-10 lg:mt-0">

            <div className="flex items-center justify-center gap-2">
              <FaOm width={40} height={40} className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-indigo-500 dark:text-gray-200" />
              <h1 className="titleMP  mx-2">Намастэ</h1>
              <LiaPrayingHandsSolid width={30} height={30} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-indigo-500 dark:text-gray-200" />
            </div>

            <div className="subTitleMP mt-5 w-full text-center">
              <p>Вас приветствует <b className="text-indigo-500 dark:text-gray-200">Тиртхадэва</b></p>
              <p>В миру <b>Тимур Таиров</b></p>
            </div>

            <div className='mt-10 lg:mt-5 xl:mt-10 flex flex-col items-start justify-center gap-5 lg:gap-2 p-6 lg:p-3 xl:p-6 xl:gap-5 rounded-lg '>
              <div className="w-full flex items-center rounded-lg p-1 dark:bg-slate-700">
                <Image src={guru96} alt="guru" className="h-full w-auto rounded-lg mr-2 border-2" />
                <p className="textMP">Ученик просветленного мастера</p>
              </div>
              <div className="textMP w-full flex items-center rounded-lg p-1 dark:bg-slate-700">
                <Image src={tirthadeva96} alt="guru" className="h-full w-auto rounded-lg mr-2 border-2" />
                <p className="textMP">Преподаватель йоги и медитации</p>
              </div>
              <div className="textMP w-full flex items-center  rounded-lg p-1 dark:bg-slate-700">
                <Image src={om96} alt="guru" className="h-full w-auto rounded-lg  mr-2 border-2" />
                <p className="textMP">Ваш наставник на пути йоги и дхармы</p>
              </div>
            </div>
            <NavigationButton title={'Начать практику йоги'} link={'/yoga/yogaonline'} />
          </div>
        </div>

        <div className="flex flex-col justify-center mt-5 lg:mt-0">
          <Image src={myPhoto} width={500} height={500} priority alt="my foto" className="w-full h-auto xl:h-[42rem] xl:w-[42rem] rounded-lg" />
        </div>

      </div>

      <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col items-center w-full rounded-lg p-3 lg:p-6">

        <div className="w-full flex items-center justify-center mt-5">
          <Image src={lotusSVG} alt="Йог медитация" className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600  dark:invert" />
          <h5 className="titleMP text-center">Миссия</h5>
        </div>

        <div className='w-full flex xl:flex-row flex-col items-start justify-center gap-4 md:gap-6 mt-3'>
          <div className="subTitleMP w-full flex items-center  rounded-lg p-3 xl:p-6 dark:bg-slate-700">
            <Image src={omGif} width={30} height={30} alt="om" className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5" />
            <p>Cлужение Высшим идеалам йоги (Гуру, Дхарме и Cангхе)</p>
          </div>
          <div className="subTitleMP w-full flex items-center rounded-lg p-3 xl:p-6 dark:bg-slate-700">
            <Image src={omGif} width={30} height={30} alt="om" className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5" />
            <p>Помощь всем живым существам в преодолении неведения</p>
          </div>
          <div className="subTitleMP w-full flex items-center rounded-lg p-3 xl:p-6 dark:bg-slate-700">
            <Image src={omGif} width={30} height={30} alt="om" className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5" />
            <p>Распространение истинных знаний йоги</p>
          </div>
        </div>
      </div>

      <MyGurus />

      <div className="w-full mt-5 md:mt-10 lg:mt-20 p-3 lg:p-6 rounded-lg">

        <div className="w-full flex items-center justify-center mt-5">
          <Image src={meditationSVG} alt="Йог медитация" className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert" />
          <h5 className="titleMP text-center">Направления йоги</h5>
        </div>

        <div className="w-full flex xl:flex-row flex-col gap-4 md:gap-6 mt-5 justify-center">
          <div className="flex items-start border rounded-md w-full h-44 xl:w-96 bg-gray-50 dark:bg-slate-700">
            <Image src={hatha} alt="Хатха йога" className="h-full w-auto rounded-md" />
            <div className="w-full h-full flex flex-col items-center">
              <p className="w-full text-center subTitleMP">Хатха йога сиддхов</p>
              <div className="h-full flex flex-col justify-around">
                <Steps step1={'Гибкость'} step2={'Сила'} step3={'Долголетие'} />
              </div>
            </div>
          </div>
          <div className="flex items-start border rounded-md w-full h-44 xl:w-96 bg-gray-50 dark:bg-slate-700">
            <Image src={kundalini} alt="Кундалини йога" className="h-full w-auto rounded-md" />
            <div className="w-full h-full flex flex-col items-center">
              <p className="w-full text-center subTitleMP">Кундалини йога сиддхов</p>
              <div className="h-full flex flex-col justify-around">
                <Steps step1={'Энергия'} step2={'Детоксикация'} step3={'Здоровье'} />
              </div>
            </div>
          </div>
          <div className="flex items-center border rounded-md xl:w-96 w-full h-44 bg-gray-50 dark:bg-slate-700">
            <Image src={meditation} alt="Медитация" className="h-full w-auto rounded-md" />
            <div className="w-full h-full flex flex-col items-center">
              <p className="w-full text-center subTitleMP">Медитация сиддхов</p>
              <div className="h-full flex flex-col justify-around">
                <Steps step1={'Спокойствие'} step2={'Осознанность'} step3={'Просветление'} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-5 md:mt-10 lg:mt-20 p-3 lg:p-6 rounded-md">

        <div className="w-full flex items-center justify-center mt-5">
          <Image src={yogaasanaSVG} alt="Йог медитация" className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert" />
          <p className="titleMP text-center ">Мой опыт в йоге</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 mt-5">
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1">
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">14 лет</p>
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
            <p className="text-indigo-600 dark:text-emerald-400 titleMP">2000+</p>
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

      <div className="w-full mt-5 md:mt-10 lg:mt-20 p-3 lg:p-6 rounded-md">

        <div className="w-full flex items-center justify-center mt-5">
          <Image src={yogaasana2SVG} alt="Йог медитация" className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert" />
          <h5 className="titleMP text-center">Как я преподаю йогу</h5>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 mt-5">
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP ">Делаю акцент на гармонию, созерцание и осознанность</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP">Даю асаны в статике, в легком медитативном состоянии</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP">Обьясняю разные вариации асан, в зависимости от уровня подготовки практикующих </p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP">Исключаю крайности: позы йоги не должны быть слишком сложными или слишком лёгкими</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP">Чередую напряжение и расслабление: даю небольшой отдых между асанами</p>
          </div>
          <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center">
            <p className=" textMP">Рекомендую выходить из асан самостоятельно, если есть в этом необходимость</p>
          </div>
        </div>
        <div className="mt-5">
          <NavigationButton title={'Подробнее ...'} link={'yoga/basicrules'} />
        </div>
      </div>

      <YogaOnline />

      <Testimonial />

      <Price />

      <div className="w-full flex justify-center">
        <div className='mt-5 md:mt-10 lg:mt-20 p-2 w-10/12 lg:w-9/12 grid grid-cols-2 grid-row-4 md:grid-cols-4'>
          <Link href="/osebe/education" className="m-1">Образование</Link>
          <Link href="/osebe/certificates" className="m-1">Сертификаты</Link>
          <Link href="/yoga/feedbacks" className="m-1">Отзывы</Link>
          <Link href="/osebe/contacts" className="m-1">Контакты</Link>
          <Link href="/tradition/master" className="m-1">Мастер</Link>
          <Link href="/tradition/links" className="m-1">Ссылки</Link>
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
