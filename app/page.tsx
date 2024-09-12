import Image from "next/image"
import Link from "next/link"
import Gradient from "@/components/Gradient"
import myPhoto from '@/public/04.jpg'
import om from '@/public/om-96.png'
import namaste from '@/public/namaste.png'
import { FaWhatsapp } from "react-icons/fa"
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

export default function Home() {
  return (
    <main className="max-w-screen-xl lg:mx-auto mx-2 flex flex-col items-center justify-center text-lg lg:text-2xl">
      <Gradient />
      <div className="flex flex-col mt-10">
        <div className="mb-5 flex w-full items-center justify-center">
          <Image src={myPhoto} width={500} height={500} priority alt="my foto" className="h-60 w-auto md:h-[40rem] md:w-[40rem] p-1 rounded-full my-foto" />
        </div>

        <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-2">
            <Image src={om} width={40} height={40} alt="om" className="lg:w-20 lg:h-20" />
            <h1 className="text-2xl lg:text-7xl font-bold">Намастэ</h1>
            <Image src={namaste} width={30} height={30} alt="namaste" className="lg:w-14 lg:h-14" />
          </div>
          <h3 className="mt-5">
            Вас приветствует <b>Тиртхадэва</b>
          </h3>
          <h3>В миру <b>Тимур Таиров</b></h3>
        </div>
      </div>

      <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col items-center w-full">

        <div className='flex lg:flex-row flex-col items-start justify-center gap-2 lg:gap-5 rounded-lg'>
          <div className="w-full flex items-center  gap-1 border-2 p-2 lg:p-5 rounded-lg">
            <Image src={guru96} alt="guru" className="h-full w-auto rounded-lg mr-2" />
            <p>Ученик просветленного мастера</p>
          </div>
          <div className="w-full flex items-center j gap-1 border-2 p-2 lg:p-5 rounded-lg">
            <Image src={tirthadeva96} alt="guru" className="h-full w-auto rounded-lg  mr-2" />
            <p>Преподаватель йоги и медитации</p>
          </div>
          <div className="w-full flex items-center  gap-1 border-2 p-2 lg:p-5 rounded-lg">
            <Image src={om96} alt="guru" className="h-full w-auto rounded-lg  mr-2" />
            <p> Ваш наставник на пути йоги и дхармы</p>
          </div>
        </div>

        <h5 className="mt-5 md:mt-10 lg:mt-20 w-full text-center text-2xl lg:text-7xl font-semibold">Моя миссия</h5>
        <div className='flex lg:flex-row flex-col items-start justify-center gap-2 lg:gap-5 lg:mt-5 mt-2'>
          <div className="w-full h-32 flex items-center gap-1 border-2 p-3  rounded-lg">
            <Image src={omGif} width={40} height={40} alt="om" className="lg:w-20 lg:h-20 rounded-full border-2 border-yellow-500 mr-2" />
            <p>
              Cлужение Высшим идеалам йоги (Гуру, Дхарме и Cангхе)
            </p>
          </div>
          <div className="w-full h-32 flex items-center gap-1 border-2 p-3 rounded-lg">
            <Image src={omGif} width={40} height={40} alt="om" className="lg:w-20 lg:h-20 rounded-full border-2 border-yellow-500 mr-2" />
            <p>
              Помощь всем живым существам в преодолении неведения
            </p>
          </div>
          <div className="w-full h-32 flex items-center gap-1 border-2 p-3 rounded-lg">
            <Image src={omGif} width={40} height={40} alt="om" className="lg:w-20 lg:h-20 rounded-full border-2 border-yellow-500 mr-2" />
            <p>Распространение истинных знаний йоги</p>
          </div>
        </div>

        <div className=" mt-5 md:mt-10 lg:mt-20">
          <h5 className="lg:mt-10 w-full text-center text-2xl lg:text-7xl font-semibold">Провожу занятия по следующим направлениям йоги</h5>
          <div className="w-full flex lg:flex-row flex-col gap-2 md:gap-10 lg:gap-20 mt-2 lg:mt-5">
            <div className="flex items-center border-2 rounded-lg lg:w-96 w-full h-40 mt-2">
              <Image src={hatha} alt="o sebe" className="h-full w-auto rounded-lg" />
              <p className="font-bold w-full text-center">Хатха йога сиддхов</p>
            </div>
            <div className="flex items-center border-2 rounded-lg lg:w-96 w-full h-40 mt-2">
              <Image src={kudalini} alt="o sebe" className="h-full w-auto rounded-lg" />
              <p className="font-bold w-full text-center">Кундалини йога сиддхов</p>
            </div>
            <div className="flex items-center border-2 rounded-lg lg:w-96 w-full h-40 mt-2">
              <Image src={meditation} alt="o sebe" className="h-full w-auto rounded-lg" />
              <p className="font-bold w-full text-center">Медитация сиддхов</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 md:mt-10 lg:mt-20 border-2 p-5 rounded-lg">
          <h5 className="text-center text-3xl lg:text-7xl font-semibold">Опыт в йоге</h5>
          <div className="flex flex-wrap gap-5 lg:gap-10 lg:mt-5 mt-2 items-center justify-start lg:justify-center">
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">&gt; 14 лет </p>
              <p className="">личной практики йоги</p>
            </div>
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">&gt; 9 лет </p>
              <p className="">ежедневных медитаций</p>
            </div>
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">&gt; 8 лет </p>
              <p className="">преподавания йоги</p>
            </div>
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">&gt; 2000 </p>
              <p className="">проведенных занятий по йоге</p>
            </div>
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">&gt; 50 </p>
              <p className="">пройденных семинаров</p>
            </div>
            <div className="flex flex-col">
              <p className="text-emerald-400 text-3xl lg:text-8xl font-bold">&gt; 20 </p>
              <p className="">пройденных ретритов</p>
            </div>
          </div>
        </div>

        <a href="whatsapp://send?phone=79672067710" className="text-xl md:text-3xl lg:text-5xl flex items-center mt-5 p-2 md:mt-10 lg:mt-20  rounded-lg border-2 border-emerald-400 text-emerald-600 bg-emerald-50">
          <FaWhatsapp className='me-2 ' />Записаться на йогу онлайн
        </a>

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

    </main>
  )
}
