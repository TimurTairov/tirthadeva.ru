import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import phone from '@/public/phone.png'

const SignUpForYogaOnline = () => {
  return (
    <div className="flex w-full justify-center">
      <a
        href="whatsapp://send?phone=79672067710"
        className="font-semibold text-md md:text-2xl flex items-center p-2 mt-5 md:mt-10 lg:mt-20 rounded-lg border border-emerald-400 text-emerald-400  bg-lime-50 hover:text-indigo-500 hover:border-indigo-500 hover:bg-indigo-50"
      >
        <Image
          src={phone}
          width={30}
          height={30}
          alt="phone"
          className="mr-2 call-animation"
        />
        {/* <FaWhatsapp className="me-2 call-animation" /> */}
        Записаться на йогу онлайн
      </a>
    </div>
  )
}

export default SignUpForYogaOnline
