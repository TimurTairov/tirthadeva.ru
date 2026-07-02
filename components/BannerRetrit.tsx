import Image from 'next/image'
import bannerRetrit from "@/public/Banners/dharana.webp"


const BannerRetrit = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-5 mt-20 lg:mt-40'>
      <a href="https://shaktima.vercel.app/mdc-events/dharana" target="_blank"
        rel="noreferrer">
        <Image src={bannerRetrit} alt="Ретрит в ШактиМа" className="px-1 rounded-md" />
      </a>
      <a href="https://shaktima.vercel.app/mdc-events/dharana" target="_blank"
        rel="noreferrer"
        className='w-full flex flex-col justify-center items-center'>
        <h5 className='titleMP  text-center py-2'>ВНУТРИ ТОЧКИ — БЕСКОНЕЧНОСТЬ</h5>
        <div className='w-full mt-1 lg:mt-10 xl:mt-12 2xl:mt-16 grid grid-cols-1 md:grid-cols-2 gap-2'>
          <p className='border rounded-md border-gray-200 dark:border-gray-600 px-3 py-2 bg-gray-50 shadow dark:bg-gray-700'>Ретрит выходного дня</p>
          <p className='border rounded-md border-gray-200 dark:border-gray-600 px-3 py-2 bg-gray-50 shadow dark:bg-gray-700'>26 июля с 9:30 до 19:00</p>
          <p className='border rounded-md border-gray-200 dark:border-gray-600 px-3 py-2 bg-gray-50 shadow dark:bg-gray-700'>Для начинающих и опытных садху</p>
          <p className='border rounded-md border-gray-200 dark:border-gray-600 px-3 py-2 bg-gray-50 shadow dark:bg-gray-700'>За свободные пожертвования</p>
          <p className='border rounded-md border-gray-200 dark:border-gray-600 px-3 py-2 bg-gray-50 shadow dark:bg-gray-700'>Дхарма центр ШактиМа</p>
          <p className='border rounded-md border-gray-200 dark:border-gray-600 px-3 py-2 bg-gray-50 shadow dark:bg-gray-700'>Проводник: Тиртхадева</p>
        </div>
        <div className='w-full flex justify-center mt-5 lg:mt-10 xl:mt-12 2xl:mt-16 '>
          <p className='flare-button text-white dark:text-white hover:bg-white  dark:hover:text-indigo-700 bg-amber-400 transition duration-300 ease-in'>Подробнее...</p>
        </div>
      </a>

    </div>
  )
}

export default BannerRetrit