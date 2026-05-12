import type { Metadata } from "next";
import Image from "next/image"
// import SignUpForYogaOnline from '@/components/SignUpForYogaOnline'
import NavigationButton from '@/components/NavigationButton'
// import { FaWhatsapp } from "react-icons/fa"
import yogaClass from '@/public/yogaclass1.webp'
import { GoDotFill } from "react-icons/go";

export const metadata: Metadata = {
  title: "Расписание занятий",
  description: "Расписание моих занятий в клубах, а также расписание йоги онлайн.",
};

const page = () => {
  return (
    <div className='main-container textMP'>
      <h1 className="main-title">Расписание занятий</h1>

      <h5 className='mt-5 mb-1'>
        <a href='https://shaktima.vercel.app/' target='_blank' rel='noreferrer' className="subTitleMP">1. Дхарма центр ШактиМа</a>
      </h5>
      <div className="flex items-center gap-1 ">
        <GoDotFill className='me-2' color='orange' />
        Воскресение 9:30
        <a href="https://shaktima.vercel.app/mdc-events/dhiyana" target="_blank"
          rel="noreferrer"
          className='text-indigo-700 dark:text-indigo-400'>
          Медитативный ретрит
        </a>
        (8 часов)
      </div>

      <h5 className='mt-5 mb-1'>
        <a href='https://ivanovskoe.mangofitness.ru/' target='_blank' rel='noreferrer' className="subTitleMP">2. Фитнес клуб Манго</a>
      </h5>
      <p className="flex items-center">
        <GoDotFill className='me-2' color='orange' />
        Понедельник 21:00 Хатха йога (90 минут)
      </p>

      <h5 className='mt-5 mb-1'>
        <a href='https://fitnessavenue.ru/' target='_blank' rel='noreferrer' className="subTitleMP">3. ФК ФитнесАвеню</a>
      </h5>
      <p className="flex items-center">
        <GoDotFill className='me-2' color='orange' />
        Четверг 9:00 Хатха Йога (55 минут)
      </p>
      <p className="flex items-center">
        <GoDotFill className='me-2' color='orange' />
        Пятница 9:00 Хатха Йога (55 минут)
      </p>


      <h5 className='flex items-center mt-5 mb-1'>
        <a href="whatsapp://send?phone=79672067710" className="ml-1 subTitleMP">4. Йога онлайн </a>
      </h5>
      <p className="flex items-center">
        <GoDotFill className='me-2' color='orange' />
        Пятница 20:00 Хатха йога (90 минут)
      </p>
      <p className="flex items-center">
        <GoDotFill className='me-2' color='orange' />
        Воскресение 9:00 Кундалини йога (90 минут)
      </p>

      <div className="mt-10 w-full">
        <NavigationButton
          title={'Начать практику йоги'}
          link={'/yoga/yogaonline'}
        />
      </div>

      <Image src={yogaClass} alt='yoga class' loading="lazy" className="mt-10 rounded-md" />
    </div>
  )
}

export default page