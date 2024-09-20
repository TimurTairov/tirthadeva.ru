import Image from "next/image"
import bottomImg from '@/public/108.png'

const BottomImg = () => {
  return (
    <div className="w-full flex justify-center">
      <Image src={bottomImg} width={500} height={500} alt="img" className='mt-20 w-1/2' />
    </div>
  )
}

export default BottomImg