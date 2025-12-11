import Image from "next/image"
import { IoLocationSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import rutube from '@/public/SVG/rutube__.svg'
import BottomImg from "@/components/BottomImg";

const page = () => {
  return (
    <div className='main-container text-lg'>
      <h1 className="main-title">Контакты</h1>

      <ul className='mt-10 flex flex-row flex-wrap items-center justify-between lg:mx-40 xl:mx-70'>

        <li className='flex flex-col border p-5 m-2 rounded-lg w-full lg:w-1/3'>
          <div className='flex items-center gap-2'>
            <IoLocationSharp className="h-7 w-7" />
            <h3 className='font-semibold text-2xl mt-2'> Локация</h3>
          </div>
          <p className="a">Москва</p>
        </li>

        <li className='flex flex-col border p-5 m-2 rounded-lg w-full lg:w-1/3'>
          <div className='flex items-center gap-5'>
            <FaSquareWhatsapp className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'> WhatsApp</h3>
          </div>
          <p>
            <a href="whatsapp://send?phone=79672067710" target='_blank'
              rel='noreferrer' className='contactsLink'>+7 (967) 206-77-10</a>
          </p>
        </li>

        <li className='flex flex-col border p-5 m-2 rounded-lg w-full lg:w-1/3'>
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

        <li className='flex flex-col border p-5 m-2 rounded-lg w-full lg:w-1/3'>
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

        <li className='flex flex-col border p-5 m-2  rounded-lg w-full lg:w-1/3'>
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

        <li className='flex flex-col border p-5 m-2  rounded-lg w-full lg:w-1/3'>
          <div className='flex items-center gap-2'>
            <Image src={rutube} width={20} height={20} alt="rutube" className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'> Rutube</h3>
          </div>
          <p>
            <a href='https://rutube.ru/channel/37056248/'
              target="_blank"
              rel="noreferrer"
              className='contactsLink'
            >
              Тиртхадэва | Йога, медитация, адвайта.
            </a>
          </p>
        </li>

        <li className='flex flex-col border p-5 m-2  rounded-lg w-full lg:w-1/3'>
          <div className='flex items-center gap-2'>
            <FaYoutube className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'> YouTube</h3>
          </div>
          <p>
            <a href='https://www.youtube.com/@tirthadeva_yoga'
              target="_blank"
              rel="noreferrer"
              className='contactsLink'
            >
              @tirthadeva_yoga
            </a>
          </p>
        </li>

        <li className='flex flex-col border p-5 m-2 rounded-lg w-full lg:w-1/3'>
          <div className='flex items-center gap-2'>
            <FaInstagram className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'> Instagram</h3>
          </div>
          <p>
            <a href='https://www.instagram.com/timur_brahmachari/'
              target='_blank'
              rel='noreferrer'
            >
              @timur_brahmachari
            </a>
          </p>
        </li>

        {/* <li className='flex flex-col border p-2 m-2 rounded-lg w-full lg:w-1/3'>
          <div className='flex items-center gap-2'>
            <FaSkype className="h-7 w-7" />
            <h3 className='font-semibold text-2xl'>Skype</h3>
          </div>
          <p className="a">t1m1985</p>
        </li> */}
      </ul>
      <div className="lg:mt-40 xl:mt-52"></div>
      <BottomImg />
      {/* <Image src={trishula} width={400} height={300} alt="trishula" className="mt-10 w-full rounded-md" /> */}
    </div >
  )
}

export default page