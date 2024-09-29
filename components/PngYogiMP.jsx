import Image from 'next/image'
import nataraja from '@/public/nataraja.png'
import yog1 from '@/public/yog1.png'
import yog4 from '@/public/yog4.png'
import yog5 from '@/public/yog5.png'
import yog6 from '@/public/yog6.png'

const PngYogiMP = () => {
  return (
    <div className="mt-7 md:mt-10 lg:mt-20 flex items-end justify-around w-full">
      <Image src={yog1} width={108} height={108} alt="yog 1" />
      <Image src={yog5} width={95} height={95} alt="yog 2" />
      <Image
        src={nataraja}
        width={115}
        height={115}
        alt="Lord Shiva Nataraja"
      />
      <Image src={yog6} width={95} height={95} alt="yog 3" />
      <Image src={yog4} width={108} height={108} alt="yog 4" />
    </div>
  )
}

export default PngYogiMP
