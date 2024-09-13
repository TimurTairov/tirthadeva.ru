"use client"
import Image from "next/image"
import Link from "next/link"
import Gradient from "@/components/Gradient"
import SignUpForYogaOnline from '@/components/SignUpForYogaOnline'
import myPhoto from '@/public/04.jpg'
import om from '@/public/om-96.png'
import namaste from '@/public/namaste.png'
import nataraja from '@/public/nataraja.png'
import yog1 from '@/public/yog1.png'
import yog2 from '@/public/yog2.png'
import yog3 from '@/public/yog3.png'
import yog4 from '@/public/yog4.png'
import yog5 from '@/public/yog5.png'
import yog6 from '@/public/yog6.png'
import hatha from '@/public/hatha2.jpg'
import kudalini from '@/public/kundalini.jpg'
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

export default function Home() {
  const settings = {
    showBullets: false,
    showIndex: false,
    slideDuration: 1000,
    slideInterval: 3000,
    showFullscreenButton: false,
    showThumbnails: false,
    lazyLoad: true,
  }

  return (
    <main className="max-w-screen-xl lg:mx-auto mx-2 flex flex-col items-center justify-center text-lg lg:text-2xl">

      <Gradient />

      <div className="w-full flex lg:flex-row flex-col justify-between mt-10">
        <div className="flex justify-center">
          <Image src={myPhoto} width={500} height={500} priority alt="my foto" className="w-full h-auto lg:h-[40rem] lg:w-[40rem] p-1 rounded-lg my-foto" />
        </div>

        <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col items-center justify-start">

          <div className="flex items-center justify-center gap-2">
            <Image src={om} width={40} height={40} alt="om" className="lg:w-20 lg:h-20" />
            <h1 className="text-2xl lg:text-7xl font-bold">Намастэ</h1>
            <Image src={namaste} width={30} height={30} alt="namaste" className="lg:w-14 lg:h-14" />
          </div>

          <div>
            <div className="mt-5 w-full text-center">
              <p>Вас приветствует <b>Тиртхадэва</b></p>
              <p>В миру <b>Тимур Таиров</b></p>
            </div>

            <div className='mt-10 flex flex-col items-start justify-center gap-5 lg:gap-5 rounded-lg'>
              <div className="w-full flex items-center rounded-lg">
                <Image src={guru96} alt="guru" className="h-full w-auto rounded-lg mr-2 border" />
                <p>Ученик просветленного мастера</p>
              </div>
              <div className="w-full flex items-center   rounded-lg">
                <Image src={tirthadeva96} alt="guru" className="h-full w-auto rounded-lg mr-2 border" />
                <p>Преподаватель йоги и медитации</p>
              </div>
              <div className="w-full flex items-center  rounded-lg">
                <Image src={om96} alt="guru" className="h-full w-auto rounded-lg  mr-2 border" />
                <p> Ваш наставник на пути йоги и дхармы</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col items-center w-full">
        <h5 className="mt-5 md:mt-10 lg:mt-20 w-full text-center text-2xl lg:text-7xl font-semibold">Моя миссия</h5>
        <div className='flex lg:flex-row flex-col items-start justify-center gap-5 lg:mt-5 mt-2'>
          <div className="w-full flex items-center  rounded-lg">
            <Image src={omGif} width={40} height={40} alt="om" className="lg:w-20 lg:h-20 rounded-full border-2 border-yellow-500 mr-3" />
            <p>
              Cлужение Высшим идеалам йоги (Гуру, Дхарме и Cангхе)
            </p>
          </div>
          <div className="w-full flex items-center rounded-lg">
            <Image src={omGif} width={40} height={40} alt="om" className="lg:w-20 lg:h-20 rounded-full border-2 border-yellow-500 mr-3" />
            <p>
              Помощь всем живым существам в преодолении неведения
            </p>
          </div>
          <div className="w-full flex items-center rounded-lg">
            <Image src={omGif} width={40} height={40} alt="om" className="lg:w-20 lg:h-20 rounded-full border-2 border-yellow-500 mr-3" />
            <p>Распространение истинных знаний йоги</p>
          </div>
        </div>

        <div className=" mt-5 md:mt-10 lg:mt-20">
          <h5 className="lg:mt-10 w-full text-center text-2xl lg:text-7xl font-semibold">Провожу занятия по следующим направлениям йоги</h5>
          <div className="w-full flex lg:flex-row flex-col gap-2 md:gap-10 mt-5 justify-center">
            <div className="flex items-center border-2 rounded-md lg:w-96 w-full h-40">
              <Image src={hatha} alt="o sebe" className="h-full w-auto rounded-md" />
              <p className="font-bold w-full text-center">Хатха йога сиддхов</p>
            </div>
            <div className="flex items-center border-2 rounded-md lg:w-96 w-full h-40">
              <Image src={kudalini} alt="o sebe" className="h-full w-auto rounded-md" />
              <p className="font-bold w-full text-center">Кундалини йога сиддхов</p>
            </div>
            <div className="flex items-center border-2 rounded-md lg:w-96 w-full h-40">
              <Image src={meditation} alt="o sebe" className="h-full w-auto rounded-md" />
              <p className="font-bold w-full text-center">Медитация сиддхов</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 md:mt-10 lg:mt-20 p-5 rounded-md bg-slate-600">
          <h5 className="text-center text-3xl lg:text-7xl font-semibold text-gray-100 ">Опыт в йоге</h5>
          <div className="flex justify-center">
            <Image src={graph} alt="graph" className="w-20 lg:w-48 mt-5" />
          </div>
          <div className="flex flex-wrap gap-5 lg:gap-10 lg:mt-5 mt-2 items-center justify-start lg:justify-center">
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">14 лет</p>
              <p className="text-gray-100 ">личной практики йоги</p>
            </div>
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">9 лет</p>
              <p className="text-gray-100 ">ежедневных медитаций</p>
            </div>
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">8 лет</p>
              <p className="text-gray-100 ">преподавания йоги</p>
            </div>
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">2000+</p>
              <p className="text-gray-100 ">проведённых занятий по йоге</p>
            </div>
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">50+</p>
              <p className="text-gray-100 ">пройденных семинаров</p>
            </div>
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">20+</p>
              <p className="text-gray-100 ">пройденных ретритов</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 md:mt-10 lg:mt-20 border-2 p-1 rounded-md bg-red-50">
          <h5 className="text-center text-3xl lg:text-7xl font-semibold text-gray-600 mt-3">Йога онлайн</h5>
          <div className="w-full mt-5 flex flex-col lg:flex-row justify-between">
            <Image src={yogaonline1} alt="yoga online" className="w-full lg:w-1/4 lg:h-auto" />
            <div className="flex flex-col flex-wrap gap-2 mt-5 ml-2 justify-start text-md lg:text-3xl">
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
            <Image src={yogaonline2} alt="yoga online" className="mt-5 w-full lg:w-1/4 lg:h-auto" />
          </div>
          <h5 className="mt-10 w-full text-center text-gray-600">Отзывы на йогу онлайн</h5>
          <ImageGallery items={feedbacks} {...settings} />
          <SignUpForYogaOnline />
          <p className="text-gray-600 mt-5 text-sm">* - только для новых учеников </p>
        </div>


        <div className='mt-5 md:mt-10 lg:mt-20 flex gap-2 flex-wrap justify-around p-2 w-full'>
          <Link href="/osebe/education" className="my-1">Образование</Link>
          <Link href="/osebe/certificates" className="my-1">Сертификаты</Link>
          <Link href="/yoga/feedbacks" className="my-1">Отзывы</Link>
          <Link href="/osebe/contacts" className="my-1">Контакты</Link>
          <Link href="/tradition/master" className="my-1">Мастер</Link>
          <Link href="/tradition/links" className="my-1">Полезные ссылки</Link>
          <Link href="/yoga/basicrules" className="my-1">Хатха йога</Link>
          <Link href="/yoga/nauli" className="my-1">Наули</Link>
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
