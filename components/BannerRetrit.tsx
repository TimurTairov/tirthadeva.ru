import Image from 'next/image'
import bannerRetrit from "@/public/Banners/retrit.webp"

const BannerRetrit = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-1 mt-20 lg:mt-40'>
      <a href="https://shaktima.vercel.app/mdc-events/dhiyana" target="_blank"
        rel="noreferrer">
        <Image src={bannerRetrit} alt="Ретрит в ШактиМа" className="px-1 rounded-md" />
      </a>
      <a href="https://shaktima.vercel.app/mdc-events/dhiyana"
        target="_blank"
        rel="noreferrer"
        className='w-full'>
        <h5 className='titleMP  text-center py-2'>Ретрит в Москве</h5>
        <p className='mt-1 w-full text-center'>• 28 июня с 9:30 до 19:00</p>
        <p className='mt-1 w-full text-center'>• Для начинающих и опытных садху</p>
        <p className='mt-1 w-full text-center'>• За свободные пожертвования</p>
        <p className='mt-1 w-full text-center'>• Дхарма центр ШактиМа</p>
        <p className='mt-1 w-full text-center'>• Проводит Тиртхадева</p>
      </a>

    </div>
  )
}

export default BannerRetrit