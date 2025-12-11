import Image from 'next/image'

const MyPhoto = ({ foto }) => {
  return (
    <div className="relative">
      <div className="absolute -inset-5">
        <div className="w-full h-full rounded-full  mx-auto lg:mx-0 opacity-30 blur-2xl bg-linear-to-r from-yellow-400 via-pink-500 to-green-600"></div>
      </div>
      <Image
        src={foto}
        alt="my foto"
        priority
        className="relative mt-10 lg:mt-0 h-full w-full lg:w-148 xl:w-160 rounded-full border-2 border-zinc-200 hover:scale-110 md:hover:scale-125 duration-1000 ease-in"
      />
    </div>
  )
}

export default MyPhoto
