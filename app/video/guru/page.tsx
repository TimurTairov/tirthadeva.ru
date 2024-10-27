import Link from "next/link"
import { videoGuru } from "./index"

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Видео с Гуру</h1>

      <div className='w-full flex justify-center'>
        <ul className='grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-7'>
          {videoGuru.map((item) => (
            <li key={item.id} className='w-full  flex flex-col'>
              <Link href={`/video/guru/${item.id}`} className='text-sm lg:text-base dark:text-gray-300'>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>


    </div>
  )
}

export default page