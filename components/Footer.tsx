import Link from "next/link";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import trishula from '@/public/trishula.png'

const Footer = () => {
  return (
    <footer className=" bg-[#343434] mt-auto">
      <div className="flex flex-col md:flex-row items-start justify-between md:mx-1 text-xs lg:text-lg lg:mx-40 text-gray-300">

        <div className="flex flex-col items-start justify-center my-4">
          <h5 className=""><Link href='/'>На главную</Link></h5>
          <p className='footer-h5'>© All Rights Reserved 2024™</p>
          <p className='footer-h5'>Om Namah Shivaya</p>
          <Image src={trishula} width={30} height={30} alt='trishula' className="mt-2" />
        </div>

        <div className="flex flex-col items-start justify-center my-4">
          <h5>О себе</h5>
          <div className="flex flex-col items-start justify-center">
            <Link href='/education'>Образование</Link>
            <Link href='/certificates'>Сертификаты</Link>
            <Link href='/myphoto'>Мои фото</Link>
            <Link href='/contacts'>Контакты</Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4">
          <h5>Йога</h5>
          <div className="flex flex-col items-start justify-center">
            <Link href='/schedule'>Расписание</Link>
            <Link href='/feedbacks'>Отзывы</Link>
            <Link href='/basicrules'>Положения йоги</Link>
            <Link href='/nauli'>Наули</Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4">
          <h5>Традиция</h5>
          <div className="flex flex-col items-start justify-center">
            <Link href='/master'>Мастер</Link>
            <Link href='/pribezhishche'>Древо прибежища</Link>
            <Link href='/metody'>Методы Учения</Link>
            <Link href='/links'>полезные ссылки</Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4">
          <h5>Видео</h5>
          <div className="flex flex-col items-start justify-center">
            <Link href='/myvideo'>Мои видео</Link>
            <Link href='/videosguru'>Видео с Гуру</Link>
            <Link href='/videosmonahami'>Видео с монахами</Link>

          </div>
        </div>

        <div className="flex flex-col items-start justify-center my-4">
          <h5>Социальные сети</h5>
          <div className="flex flex-col items-start justify-center">
            <a href='https://vk.com/tirthadeva' target='_blank' rel='noreferrer' className="flex items-center">
              <SlSocialVkontakte className='me-2' />Vkontakte
            </a>

            <a href='https://www.instagram.com/timur_brahmachari/' target='_blank' rel='noreferrer' className="flex items-center">
              <FaInstagram className='me-2' />Instagram
            </a>

            <a href='https://www.youtube.com/@tirthadeva_yoga' target="_blank" rel="noreferrer" className="flex items-center">
              <FaYoutube className='me-2' />YouTube
            </a>

            <a href='https://t.me/mdc_ShaktiMa' target='_blank' rel='noreferrer' className="flex items-center">
              <FaTelegram className='me-2' />Tg ShaktiMa
            </a>
          </div>
        </div>

      </div >
    </footer >

  )
}

export default Footer