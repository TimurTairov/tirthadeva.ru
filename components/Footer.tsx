import Link from "next/link";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import trishula from '@/public/trishula.png'

const Footer = () => {
  return (
    <footer className=" bg-[#343434] mt-auto px-2">
      <div className="flex flex-wrap items-start justify-between md:mx-1 text-xs lg:text-lg lg:mx-40 text-gray-300">

        <div className="flex flex-col items-start justify-center my-4">
          <h5 className=""><Link href='/' className="text-gray-300 hover:text-gray-50">На главную</Link></h5>
          <p className='footer-h5'>© All Rights Reserved 2024™</p>
          <p className='footer-h5'>Om Namah Shivaya</p>
          <Image src={trishula} width={30} height={30} alt='trishula' className="mt-2" />
        </div>

        <div className="flex flex-col items-start justify-center my-4">
          <h5>О себе</h5>
          <div className="flex flex-col items-start justify-center">
            <Link href='/education' className="text-gray-300 hover:text-gray-50">Образование</Link>
            <Link href='/certificates' className="text-gray-300 hover:text-gray-50">Сертификаты</Link>
            <Link href='/myphoto' className="text-gray-300 hover:text-gray-50">Мои фото</Link>
            <Link href='/contacts' className="text-gray-300 hover:text-gray-50">Контакты</Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4">
          <h5>Йога</h5>
          <div className="flex flex-col items-start justify-center">
            <Link href='/schedule' className="text-gray-300 hover:text-gray-50">Расписание</Link>
            <Link href='/feedbacks' className="text-gray-300 hover:text-gray-50">Отзывы</Link>
            <Link href='/basicrules' className="text-gray-300 hover:text-gray-50">Положения йоги</Link>
            <Link href='/nauli' className="text-gray-300 hover:text-gray-50">Наули</Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4">
          <h5>Традиция</h5>
          <div className="flex flex-col items-start justify-center">
            <Link href='/master' className="text-gray-300 hover:text-gray-50">Мастер</Link>
            <Link href='/pribezhishche' className="text-gray-300 hover:text-gray-50">Древо прибежища</Link>
            <Link href='/metody' className="text-gray-300 hover:text-gray-50">Методы Учения</Link>
            <Link href='/links' className="text-gray-300 hover:text-gray-50">полезные ссылки</Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4">
          <h5>Видео</h5>
          <div className="flex flex-col items-start justify-center">
            <Link href='/myvideo' className="text-gray-300 hover:text-gray-50">Мои видео</Link>
            <Link href='/videosguru' className="text-gray-300 hover:text-gray-50">Видео с Гуру</Link>
            <Link href='/videosmonahami' className="text-gray-300 hover:text-gray-50">Видео с монахами</Link>

          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4">
          <h5>Социальные сети</h5>
          <div className="flex flex-col items-start justify-center">
            <a href='https://vk.com/tirthadeva' target='_blank' rel='noreferrer' className="flex items-center text-gray-300 hover:text-gray-50">
              <SlSocialVkontakte className='me-2' />Vkontakte
            </a>

            <a href='https://www.instagram.com/timur_brahmachari/' target='_blank' rel='noreferrer' className="flex items-center text-gray-300 hover:text-gray-50">
              <FaInstagram className='me-2' />Instagram
            </a>

            <a href='https://www.youtube.com/@tirthadeva_yoga' target="_blank" rel="noreferrer" className="flex items-center text-gray-300 hover:text-gray-50">
              <FaYoutube className='me-2' />YouTube
            </a>

            <a href='https://t.me/mdc_ShaktiMa' target='_blank' rel='noreferrer' className="flex items-center text-gray-300 hover:text-gray-50">
              <FaTelegram className='me-2' />Tg ShaktiMa
            </a>
          </div>
        </div>

      </div >
    </footer >

  )
}

export default Footer