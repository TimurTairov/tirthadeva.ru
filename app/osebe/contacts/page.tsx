import Image from "next/image"
import { IoLocationSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaSkype } from "react-icons/fa";

const page = () => {
  return (
    <div className='main-container'>
      <h1 className="main-title">Контакты</h1>

      <ul className='mt-10 flex flex-row flex-wrap items-center gap-5'>

        <li className='flex flex-col border p-2 rounded-lg'>
          <div className='flex items-center gap-2'>
            <IoLocationSharp className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'> Локация</h3>
          </div>
          <p>РФ, Москва. М. Новокосино.</p>
        </li>

        <li className='flex flex-col border p-2 rounded-lg'>
          <div className='flex items-center gap-2'>
            <FaSquareWhatsapp className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'> WhatsApp</h3>
          </div>
          <p>
            <a href="whatsapp://send?phone=79672067710" target='_blank'
              rel='noreferrer' className='contactsLink'>+7 (967) 206-77-10</a>
          </p>
        </li>

        <li className='flex flex-col border p-2 rounded-lg'>
          <div className='flex items-center gap-2'>
            <FaTelegram className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'> Telegram</h3>
          </div>
          <p>
            <a href='https://t.me/tirthadeva'
              target='_blank'
              rel='noreferrer'
              className='contactsLink'
            >
              @tirthadeva
            </a>
          </p>
        </li>

        <li className='flex flex-col border p-2 rounded-lg'>
          <div className='flex items-center gap-2'>
            <SlSocialVkontakte className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'> VK</h3>
          </div>
          <p>
            <a href='https://vk.com/tirthadeva'
              target='_blank'
              rel='noreferrer'
              className='contactsLink'
            >
              @tirthadeva
            </a>
          </p>
        </li>

        <li className='flex flex-col border p-2 rounded-lg'>
          <div className='flex items-center gap-2'>
            <FaInstagram className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'> Instagram</h3>
          </div>
          <p>
            <a href='https://www.instagram.com/timur_brahmachari/'
              target='_blank'
              rel='noreferrer'
              className='contactsLink'
            >
              @timur_brahmachari
            </a>
          </p>
        </li>

        <li className='flex flex-col border p-2 rounded-lg'>
          <div className='flex items-center gap-2'>
            <TfiEmail className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'> Email</h3>
          </div>
          <p>
            <a href='mailto:tairovtk@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='contactsLink'
            >tairovtk@gmail.com</a>
          </p>
        </li>

        <li className='flex flex-col border p-2 rounded-lg'>
          <div className='flex items-center gap-2'>
            <FaYoutube className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'> YouTube</h3>
          </div>
          <p className='text-muted'>
            <a href='https://www.youtube.com/@tirthadeva_yoga'
              target="_blank"
              rel="noreferrer"
              className='contactsLink'
            >
              @tirthadeva_yoga
            </a>
          </p>
        </li>

        <li className='flex flex-col border p-2 rounded-lg'>
          <div className='flex items-center gap-2'>
            <FaSkype className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'>Skype</h3>
          </div>
          <p>t1m1985</p>
        </li>

      </ul>
    </div >
  )
}

export default page