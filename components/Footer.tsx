import Link from "next/link";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import trishula from '@/public/trishula.webp'

const Footer = () => {
  return (
    <footer className="bg-[#343434] mt-auto px-2 border-t-2 border-slate-300">
      <div className="flex flex-wrap items-start justify-between md:mx-1 text-xs xl:text-lg xl:mx-40 text-gray-300">

        <div className="flex flex-col items-start justify-center my-4 font-light">
          <p className=""><Link href='/' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">На главную</Link></p>
          <p className=""><Link href='/blog' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Блог</Link></p>
          <p className='text-[0.5rem] md:text-xs mt-1 lg:mt-2'>© All Rights Reserved 2024™</p>
          <p className='text-[0.5rem] md:text-xs'>Om Namah Shivaya</p>
          <Image src={trishula} width={30} height={30} alt='trishula' loading="lazy" className="mt-2 md:mt-4 rounded-md" />
        </div>

        <div className="flex flex-col items-start justify-center my-4 font-light">
          <h5 className="text-gray-400">О себе</h5>
          <div className="flex flex-col items-start justify-center">
            <Link href='/osebe/education' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Образование</Link>
            <Link href='/osebe/certificates' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Сертификаты</Link>
            <Link href='/osebe/myphoto' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Мои фото</Link>
            <Link href='/osebe/contacts' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Контакты</Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4 font-light">
          <h5 className="text-gray-400">Йога</h5>
          <div className="flex flex-col items-start justify-center">
            <Link href='/yoga/schedule' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Расписание</Link>
            <Link href='/yoga/yogaonline' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Йога онлайн</Link>
            <Link href='/yoga/feedbacks' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Отзывы</Link>

          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4 font-light">
          <h5 className="text-gray-400">Традиция</h5>
          <div className="flex flex-col items-start justify-center">
            <Link href='/tradition/master' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Мастер</Link>
            <Link href='/tradition/pribezhishche' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Древо прибежища</Link>
            <Link href='/tradition/metody' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Методы Учения</Link>
            <Link href='/tradition/links' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Полезные ссылки</Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4 font-light">
          <h5 className="text-gray-400">Видео</h5>
          <div className="flex flex-col items-start justify-center ">
            <Link href='/video/myvideo' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Мои видео</Link>
            <Link href='/video/guru' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Видео с Гуру</Link>
            <Link href='/video/ramanatha' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Видео Раманатхи</Link>
            <Link href='/video/sanyasi' className="text-gray-300 hover:text-gray-50 dark:text-gray-200">Видео с монахами</Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4 font-light">
          <h5 className="text-gray-400">Соцсети</h5>
          <div className="flex flex-col items-start justify-center">
            <a href='https://vk.com/tirthadeva' target='_blank' rel='noreferrer' className="flex items-center text-gray-300 hover:text-gray-50 dark:text-gray-200">
              <SlSocialVkontakte className='me-2 dark:text-gray-200' />ВК
            </a>

            <a href='https://www.instagram.com/timur_brahmachari/' target='_blank' rel='noreferrer' className="flex items-center text-gray-300 hover:text-gray-50 dark:text-gray-200">
              <FaInstagram className='me-2 dark:text-gray-200' />Instagram
            </a>

            <a href='https://www.youtube.com/@tirthadeva_yoga' target="_blank" rel="noreferrer" className="flex items-center text-gray-300 hover:text-gray-50 dark:text-gray-200">
              <FaYoutube className='me-2 dark:text-gray-200' />YouTube
            </a>

            <a href='https://t.me/mdc_ShaktiMa' target='_blank' rel='noreferrer' className="flex items-center text-gray-300 hover:text-gray-50 dark:text-gray-200">
              <FaTelegram className='me-2 dark:text-gray-200' />Tg ShaktiMa
            </a>
          </div>
        </div>

      </div >
    </footer >

  )
}

export default Footer