import { BsPhoneVibrate } from 'react-icons/bs'
import { FaViber } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'

const Contacts = () => {
  return (
    <div className="mt-20 lg:mt-40">
      <div className="w-full flex items-center justify-center">
        <BsPhoneVibrate className="w-10 h-10 mr-2 rounded-full p-1 border border-black  dark:text-white dark:border-white hoverIcon" />
        <h5 className="titleMP text-center">Связаться со мной</h5>
      </div>
      <div className="mt-10 flex gap-5 justify-between max-w-xl bg-gray-50 dark:bg-slate-700 shadow-md py-2 px-4 rounded-md">
        <a
          href="whatsapp://send?phone=79672067710"
          target="_blank"
          rel="noreferrer"
          className="text-green-400 dark:text-green-400 flex flex-col items-center"
        >
          <FaWhatsapp className="w-16 h-16" />
          WhatsApp
        </a>
        <a
          href="https://t.me/tirthadeva"
          target="_blank"
          rel="noreferrer"
          className="text-sky-400 dark:text-sky-400 flex flex-col items-center"
        >
          <FaTelegram className="w-16 h-16" />
          Telegram
        </a>

        <a
          href="viber://chat?number=%2B79672067710"
          target="_blank"
          rel="noreferrer"
          className="text-violet-400 dark:text-violet-400 flex flex-col items-center"
        >
          <FaViber className="w-16 h-16" />
          Viber
        </a>
      </div>
    </div>
  )
}

export default Contacts
