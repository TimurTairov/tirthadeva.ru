"use client"
import Image from "next/image"
import Link from "next/link"
import Gradient from "@/components/Gradient"
import SignUpForYogaOnline from '@/components/SignUpForYogaOnline'
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
import yogaonline1 from '@/public/yogaonline.jpg'
import yogaonline2 from '@/public/yogaonline2.jpg'
import graph from '@/public/SVG/graph.svg'
import { feedbacks } from '@/helpers/foto'
import ImageGallery from "react-image-gallery"
import yog from '@/public/yoga-3.png'
import { LiaPrayingHandsSolid } from "react-icons/lia"
import { settings } from "@/helpers/FotoSettengs"
import { FaOm } from "react-icons/fa6"
import VideoPlayer from '@/components/VideoPlayer'

export default function Home() {

  return (
    <main className="max-w-screen-xl xl:mx-auto mx-2 flex flex-col items-center justify-center">

      <Gradient />

      <div className="w-full flex xl:flex-row flex-col justify-around mt-5">
        <div className="flex flex-col justify-center">
          <Image src={myPhoto} width={500} height={500} priority alt="my foto" className="w-full h-auto xl:h-[40rem] xl:w-[40rem] p-1 rounded-lg my-foto shadow-2xl dark:shadow-white shadow-gray-800" />
          <Link href="/osebe/myphoto" className=" mr-1 text-sm text-right">Мои фото</Link>
        </div>

        <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col items-center justify-start">

          <div className="flex items-center justify-center gap-2">
            <FaOm width={40} height={40} className="w-5 h-5 md:w-9 md:h-9 lg:w-10 lg:h-10" />
            <h1 className="titleMainPage  mx-2">Намастэ</h1>
            <LiaPrayingHandsSolid width={30} height={30} className="w-6 h-6 md:w-9 md:h-9 lg:w-10 lg:h-10" />
          </div>

          <div>
            <div className="subTitleMP mt-5 w-full text-center">
              <p>Вас приветствует <b>Тиртхадэва</b></p>
              <p>В миру <b>Тимур Таиров</b></p>
            </div>

            <div className='mt-10 flex flex-col items-start justify-center gap-5 lg:gap-5 rounded-lg'>
              <div className="textMP w-full flex items-center rounded-lg">
                <Image src={guru96} alt="guru" className="h-full w-auto rounded-lg mr-2 border-2" />
                <p>Ученик просветленного мастера</p>
              </div>
              <div className="textMP w-full flex items-center   rounded-lg">
                <Image src={tirthadeva96} alt="guru" className="h-full w-auto rounded-lg mr-2 border-2" />
                <p>Преподаватель йоги и медитации</p>
              </div>
              <div className="textMP w-full flex items-center  rounded-lg">
                <Image src={om96} alt="guru" className="h-full w-auto rounded-lg  mr-2 border-2" />
                <p>Ваш наставник на пути йоги и дхармы</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col items-center w-full">
        <h5 className="titleMainPage mt-5 md:mt-10 lg:mt-12 xl:mt-20 w-full text-center">Моя миссия</h5>
        <div className='flex xl:flex-row flex-col items-start justify-center gap-5 lg:mt-5 mt-2 xl:ml-5'>
          <div className="textMP w-full flex items-center  rounded-lg">
            <Image src={omGif} width={30} height={30} alt="om" className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5" />
            <p>Cлужение Высшим идеалам йоги (Гуру, Дхарме и Cангхе)</p>
          </div>
          <div className="textMP w-full flex items-center rounded-lg">
            <Image src={omGif} width={30} height={30} alt="om" className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5" />
            <p>Помощь всем живым существам в преодолении неведения</p>
          </div>
          <div className="textMP w-full flex items-center rounded-lg">
            <Image src={omGif} width={30} height={30} alt="om" className="xl:w-20 xl:h-20 rounded-full border-2 border-yellow-500 mr-3 md:mr-5" />
            <p>Распространение истинных знаний йоги</p>
          </div>
        </div>

        <div className="w-full mt-6 md:mt-12 lg:mt-20">
          <h5 className="titleMainPage lg:mt-10 w-full text-center">Направления йоги</h5>
          <div className="w-full flex xl:flex-row flex-col gap-2 md:gap-5 mt-5 justify-center">
            <div className="flex items-center border rounded-md w-full h-40 xl:w-96 ">
              <Image src={hatha} alt="Хатха йога" className="h-full w-auto rounded-md" />
              <p className="w-full text-center subTitleMP">Хатха йога сиддхов</p>
            </div>
            <div className="flex items-center border rounded-md w-full h-40 xl:w-96 ">
              <Image src={kundalini} alt="Кундалини йога" className="h-full w-auto rounded-md" />
              <p className="w-full text-center subTitleMP">Кундалини йога сиддхов</p>
            </div>
            <div className="flex items-center border rounded-md xl:w-96 w-full h-40">
              <Image src={meditation} alt="Медитация" className="h-full w-auto rounded-md" />
              <p className="w-full text-center subTitleMP">Медитация сиддхов</p>
            </div>
          </div>
        </div>

        {/* <div className="w-full mt-6 md:mt-12 lg:mt-20">
          <h5 className="titleMainPage lg:mt-10 w-full text-center">Почему йога?</h5>
          <VideoPlayer src="https://rutube.ru/play/embed/84de8538da2d07e455069eafea1af31a/" rt />
        </div> */}

        <div className="w-full mt-5 md:mt-10 lg:mt-20 p-2 lg:p-5 rounded-md bg-slate-600">
          <div className="w-full flex justify-center">
            <div className="flex justify-center">
              <Image src={graph} alt="graph" className="w-20 lg:w-32 xl:w-48 mt-5" />
            </div>
            <div className="flex w-full justify-center items-center">
              <h5 className="titleMainPage text-center text-gray-100 ">Опыт</h5>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 lg:mt-5 mt-2">
            <div className="flex flex-col bg-slate-700 p-2 rounded-md m-1">
              <p className="text-emerald-400 titleMainPage">14 лет</p>
              <p className="text-gray-100 textMP">личной практики йоги</p>
            </div>
            <div className="flex flex-col bg-slate-700 p-2 rounded-md m-1">
              <p className="text-emerald-400 titleMainPage">9 лет</p>
              <p className="text-gray-100 textMP">ежедневных медитаций</p>
            </div>
            <div className="flex flex-col bg-slate-700 p-2 rounded-md m-1">
              <p className="text-emerald-400 titleMainPage">8 лет</p>
              <p className="text-gray-100 textMP">преподавания йоги</p>
            </div>
            <div className="flex flex-col bg-slate-700 p-2 rounded-md m-1">
              <p className="text-emerald-400 titleMainPage">2000+</p>
              <p className="text-gray-100 textMP">проведённых занятий по йоге</p>
            </div>
            <div className="flex flex-col bg-slate-700 p-2 rounded-md m-1">
              <p className="text-emerald-400 titleMainPage">50+</p>
              <p className="text-gray-100 textMP">пройденных семинаров</p>
            </div>
            <div className="flex flex-col bg-slate-700 p-2 rounded-md m-1">
              <p className="text-emerald-400 titleMainPage">20+</p>
              <p className="text-gray-100 textMP">пройденных ретритов</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 md:mt-10 lg:mt-20 p-5 rounded-md bg-emerald-200">
          <h5 className="titleMainPage text-center text-slate-600">Как я преподаю йогу</h5>
          <div className="flex justify-center">
            <Image src={yog} alt="yog" className="w-full md:w-2/3" />
          </div>
          <div className="textMP flex flex-col gap-3 xl:gap-5 mt-5">
            <p className="text-slate-600 xl:ml-10">Делаю акцент на гармонию, созерцание и осознанность</p>
            <p className="text-slate-600 xl:ml-10">Асаны даю в статике, в легком медитативном состоянии</p>
            <p className="text-slate-600 xl:ml-10">Обьясняю разные вариации асан, в зависимости от уровня подготовки практикующих </p>
            <p className="text-slate-600 xl:ml-10">Исключаю крайности: позы йоги не должны быть слишком сложными или слишком лёгкими</p>
            <p className="text-slate-600 xl:ml-10">Чередую напряжение и расслабление: даю небольшой отдых между асанами</p>
            <p className="text-slate-600 xl:ml-10">Рекомендую выходить из асан самостоятельно, если есть в этом необходимость</p>
          </div>
        </div>

        <div className="w-full mt-5 md:mt-10 lg:mt-20 border-2 p-1 lg:p-5 rounded-md bg-yellow-100">
          <h5 className="titleMainPage text-center text-gray-600 mt-3">Йога онлайн</h5>
          <p className="text-center subTitleMP text-gray-600 mt-3">Йога онлайн это возможность практиковать йогу из дома, либо из любой точки планеты. Совсем необязательно, чтобы практикующие физически находились в одном зале с учителем. </p>
          <div className="w-full mt-5 flex flex-col lg:flex-row justify-between">
            <Image src={yogaonline1} alt="yoga online" className="w-full lg:w-1/4 lg:h-auto rounded-sm" />
            <div className="flex flex-col flex-wrap gap-2 mt-5 ml-2 justify-start textMP">
              <div className="flex items-center">
                <BiLogoZoom className="mr-2 text-rose-400" />
                <p className="text-gray-600">трансляции через <b className="text-blue-500">Zoom</b></p>
              </div>
              <div className="flex items-center">
                <GrSchedule className="mr-2  text-rose-400" />
                <p className="text-gray-600">удобное расписание</p>
              </div>
              <div className="flex items-center">
                <p className="mr-2 text-rose-400 font-bold">4 года </p>
                <p className="text-gray-600">преподавания йоги онлайн</p>
              </div>
              <div className="flex items-center">
                <p className="mr-2 text-rose-400 font-bold">3 занятия </p>
                <p className="text-gray-600">БЕСПЛАТНО*</p>
              </div>
            </div>
            <Image src={yogaonline2} alt="yoga online" className="mt-5 w-full lg:w-1/4 lg:h-auto rounded-sm" />
          </div>
          <h5 className="mt-10 w-full text-center text-gray-600 subTitleMP">Отзывы на йогу онлайн</h5>
          <ImageGallery items={feedbacks} {...settings} />
          <SignUpForYogaOnline />
          <p className="text-gray-600 mt-5 text-sm">* - только для новых учеников </p>
        </div>

        <div className="w-full flex justify-center">
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
      </div>

    </main >
  )
}
