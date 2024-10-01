import Image from 'next/image'

const MyPhoto = ({ foto }) => {
  return (
    <div>
      <Image
        src={foto}
        alt="my foto"
        className="lg:mx-5 mt-10 lg:mt-0 xl:w-[40rem] rounded-3xl shadow-xl dark:shadow-lg shadow-slate-300 dark:shadow-emerald-400"
      />
    </div>
  )
}

export default MyPhoto
