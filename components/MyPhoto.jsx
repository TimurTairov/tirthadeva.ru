import Image from 'next/image'

const MyPhoto = ({ foto }) => {
  return (
    <div className="relative">
      <div className="absolute -inset-5">
        <div className="w-full h-full rounded-full  mx-auto lg:mx-0 opacity-20 blur-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
      </div>
      <Image
        src={foto}
        alt="my foto"
        priority
        className="relative mt-10 lg:mt-0 h-full w-full lg:w-[37rem] xl:w-[40rem] rounded-full border-4 border-zinc-200"
      />
    </div>
  )
}

export default MyPhoto
