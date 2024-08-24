import Image from "next/image"
import Link from "next/link"
import myPhoto from '@/public/1.jpg'
import om from '@/public/om-96.png'
import namaste from '@/public/namaste.png'
import { IoCheckmarkDone } from "react-icons/io5"
import nataraja from '@/public/nataraja.png'
import yog1 from '@/public/yog1.png'
import yog2 from '@/public/yog2.png'
import yog3 from '@/public/yog3.png'
import yog4 from '@/public/yog4.png'

export default function Home() {
  return (
    <main className="max-w-screen-xl min-h-screen mx-auto flex flex-col items-center justify-between text-2xl ">
      <div className="flex flex-col mt-5">
        <div className="mt-5 mb-5">
          <Image src={myPhoto} width={500} height={500} alt="my foto" className="md:h-96 md:w-96 p-2 rounded-full shadow-2xl" />
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="flex items-center justify-center gap-2">
            <Image src={om} width={30} height={30} alt="om" />
            <h1 className="font-bold text-3xl">Намастэ</h1>
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
          <h5 className="flex items-center gap-1">
            <IoCheckmarkDone />
            Ученик просветленного мастера
          </h5>
          <h5 className="flex items-center gap-1">
            <IoCheckmarkDone />
            Преподаватель Йоги и Медитации
          </h5>
          <h5 className="flex items-center gap-1">
            <IoCheckmarkDone />
            Ваш наставник на пути Йоги и Дхармы
          </h5>
        </div>

        <h4 className="mt-5 flex justify-center"><b>Моя миссия:</b></h4>
        <div className='flex flex-col items-start justify-center'>
          <h5 className="flex items-center gap-1">
            <IoCheckmarkDone />
            Cлужение Высшим идеалам йоги (Гуру, Дхарме и Cангхе)
          </h5>
          <h5 className="flex items-center gap-1">
            <IoCheckmarkDone />
            Помощь всем живым существам в преодолении неведения
          </h5>
          <h5 className="flex items-center gap-1">
            <IoCheckmarkDone />
            Распространение истинных знаний йоги <br />
          </h5>
        </div>

        <div className='flex gap-2 flex-wrap justify-around my-10 mb-5 text-lg border border-dotted p-2 w-full'>
          <Link href="/osebe/education">О себе</Link>
          <Link href="/osebe/certificates">Сертификаты</Link>
          <Link href="/yoga/feedbacks">Отзывы</Link>
          <Link href="/osebe/contacts">Контакты</Link>
          <Link href="/tradition/master">Мастер</Link>
          <Link href="/tradition/links">Полезные ссылки</Link>
          <Link href="/osebe/education">Мои видео</Link>
        </div>

        <div className='flex justify-between w-full mt-5'>
          <Image src={yog1} width={108} height={108} alt="yog 1" />
          <Image src={yog2} width={108} height={108} alt="yog 2" />
          <Image src={nataraja} width={108} height={108} alt="Lord Shiva Nataraja" />
          <Image src={yog3} width={108} height={108} alt="yog 3" />
          <Image src={yog4} width={108} height={108} alt="yog 4" />
        </div>
      </div>
    </main>
  )
}
