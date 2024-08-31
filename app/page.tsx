import Image from "next/image"
import Link from "next/link"
import myPhoto from '@/public/04.jpg'
import om from '@/public/om-96.png'
import namaste from '@/public/namaste.png'
import { GiCheckMark } from "react-icons/gi"
import nataraja from '@/public/nataraja.png'
import yog1 from '@/public/yog1.png'
import yog2 from '@/public/yog2.png'
import yog3 from '@/public/yog3.png'
import yog4 from '@/public/yog4.png'
import yog5 from '@/public/yog5.png'
import yog6 from '@/public/yog6.png'

export default function Home() {
  return (
    <main className="max-w-screen-xl min-h-screen mx-auto flex flex-col items-center text-base md:text-lg lg:text-2xl font-light">
      <div className='gradient absolute top-20 bottom-0 h-full w-1/2 left-1/4'>  </div>
      <div className="flex flex-col mt-5">
        <div className="mt-5 mb-5">
          <Image src={myPhoto} width={500} height={500} priority alt="my foto" className=" h-72 w-auto md:h-[40rem] md:w-[40rem] p-1 rounded-full my-foto" />
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Image src={om} width={40} height={40} alt="om" />
            <h1 className=" text-3xl">Намастэ</h1>
            <Image src={namaste} width={30} height={30} alt="namaste" />
          </div>
          <h3>
            Вас приветствует <b className='font-bold'>Тиртхадэва</b>
          </h3>
          <h3> В миру <b>Тимур Таиров</b></h3>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center w-full">
        <div className='flex flex-col items-start justify-center'>
          <div className="flex items-center gap-1">
            <GiCheckMark className="text-teal-400 ml-2 h-6 w-6 flex-shrink-0" />
            <p>Ученик просветленного мастера</p>
          </div>
          <div className="flex items-center gap-1">
            <GiCheckMark className="text-teal-400 ml-2 h-6 w-6 flex-shrink-0" />
            <p>Преподаватель Йоги и Медитации</p>
          </div>
          <div className="flex items-center gap-1">
            <GiCheckMark className="text-teal-400 ml-2 h-6 w-6 flex-shrink-0" />
            <p> Ваш наставник на пути Йоги и Дхармы</p>
          </div>
        </div>

        <h4 className="mt-5 flex justify-center"><b>Моя миссия:</b></h4>
        <div className='flex flex-col items-start justify-center'>
          <div className="flex items-center gap-1">
            <GiCheckMark className="text-teal-400 ml-2 h-6 w-6 flex-shrink-0" />
            <p>
              Cлужение Высшим идеалам йоги (Гуру, Дхарме и Cангхе)
            </p>
          </div>
          <div className="flex items-center gap-1">
            <GiCheckMark className="text-teal-400 ml-2 h-6 w-6 flex-shrink-0" />
            <p>
              Помощь всем живым существам в преодолении неведения
            </p>
          </div>
          <div className="flex items-center gap-1">
            <GiCheckMark className="text-teal-400 ml-2 h-6 w-6 flex-shrink-0" />
            <p>Распространение истинных знаний йоги</p>

          </div>
        </div>

        <div className='flex gap-2 flex-wrap justify-around my-10 mb-5 p-2 w-full'>
          <Link href="/osebe/education" className="my-1">О себе</Link>
          <Link href="/osebe/certificates" className="my-1">Сертификаты</Link>
          <Link href="/yoga/feedbacks" className="my-1">Отзывы</Link>
          <Link href="/osebe/contacts" className="my-1">Контакты</Link>
          <Link href="/tradition/master" className="my-1">Мастер</Link>
          <Link href="/tradition/links" className="my-1">Полезные ссылки</Link>
          <Link href="/yoga/basicrules" className="my-1">Хатха йога</Link>
          <Link href="/yoga/nauli" className="my-1">Наули</Link>
        </div>

        <div className='flex items-end justify-between w-full mt-5'>
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
