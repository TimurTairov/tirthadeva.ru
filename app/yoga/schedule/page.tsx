import type { Metadata } from "next";
import Image from "next/image"
import SignUpForYogaOnline from '@/components/SignUpForYogaOnline'
import { FaSun } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import yogaClass from '@/public/yogaclass1.jpg'

export const metadata: Metadata = {
  title: "Расписание занятий",
  description: "Йога онлайн",
};

const page = () => {
  return (
    <div className='main-container font-light'>
      <h1 className="main-title">Расписание занятий</h1>

      <h5 className='mt-5 mb-1'>
        1.
        <a href='https://fitness-cccp.ru/clubs/mihajlovskij/' target='_blank' rel='noreferrer' > Фитнес клуб СССР Волгоградский проспект </a>
      </h5>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Понедельник 8:30 Хатха йога (90 минут)
      </p>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Среда 8:30 Кундалини йога (90 минут)
      </p>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Суббота 9:00 Хатха йога (90 минут)
      </p>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Суббота 10:30 Йога в гамаках (55 минут)
      </p>

      <h5 className='mt-5 mb-1'>
        2.
        <a href='https://ivanovskoe.mangofitness.ru/' target='_blank' rel='noreferrer'> Фитнес клуб Манго</a>
      </h5>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Понедельник 21:00 Хатха йога (90 минут)
      </p>

      <h5 className='mt-5 mb-1'>
        3.
        <a href='https://fitnessavenue.ru/' target='_blank' rel='noreferrer'> Фитнес Авеню</a>
      </h5>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Вторник 9:00 Хатха Йога (60 минут)
      </p>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Пятница 9:00 Хатха Йога (60 минут)
      </p>

      <h5 className='mt-5 mb-1'>
        4.
        <a href='http://prostozvezda.ru/' target='_blank' rel='noreferrer'> Детский центр &quot;Звезда&quot;</a>
      </h5>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Вторник 17:00 Хатха йога (взрослые) (60 минут)
      </p>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Вторник 18:00 здоровая спина (дети) (60 минут)
      </p>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Четверг 17:00 Хатха йога (взрослые) (60 минут)
      </p>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Четверг 18:00 здоровая спина (дети) (60 минут)
      </p>

      <h5 className='mt-5 mb-1'>
        5.
        <a href='https://ddsport.fitness/' target='_blank' rel='noreferrer'> Фитнес клуб DD Sport</a>
      </h5>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Среда 20:00 Хатха йога (90 минут)
      </p>

      <h5 className='flex items-center mt-5 mb-1'>
        6.
        <a href="whatsapp://send?phone=79672067710" className="ml-1"> Йога онлайн </a>
      </h5>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Вторник 20:30 Медитация (60 минут)
      </p>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Пятница 19:00 Хатха йога (90 минут)
      </p>
      <p className="flex items-center">
        <FaSun className='me-2' color='orange' />
        Воскресение 10:00 Кундалини йога (90 минут)
      </p>
      <SignUpForYogaOnline />

      <Image src={yogaClass} alt='yoga class' className="mt-10 rounded-md" />
    </div>
  )
}

export default page