import Image from 'next/image'

const MyPhoto = ({ foto }) => {
  return (
    <div>
      <Image
        src={foto}
        alt="my foto"
        className="mt-10 lg:mt-0 h-full w-full lg:w-[37rem] xl:w-[40rem] rounded-3xl shadow-xl dark:shadow-lg shadow-gray-400 dark:shadow-gray-400"
      />
    </div>
  )
}

export default MyPhoto
