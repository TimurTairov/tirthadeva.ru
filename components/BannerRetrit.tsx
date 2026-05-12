import Image from 'next/image'
import bannerRetrit from "@/public/Banners/retrit.webp"

const BannerRetrit = () => {
  return (
    <div className='w-full flex flex-col gap-1 mt-7 lg:mt-10 xl:mt-20'>
      <a href="https://shaktima.vercel.app/mdc-events/dhiyana"
        target="_blank"
        rel="noreferrer"
        className='text'>
        <h5 className='titleMP  text-center'>Ретрит в Москве (донейшн)</h5>
      </a>
      <a href="https://shaktima.vercel.app/mdc-events/dhiyana" target="_blank"
        rel="noreferrer">
        <Image src={bannerRetrit} alt="Ретрит в ШактиМа" className="w-full " />
      </a>
    </div>
  )
}

export default BannerRetrit