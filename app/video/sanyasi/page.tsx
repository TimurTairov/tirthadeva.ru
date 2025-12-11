import Link from "next/link"
import { videoSanyasi } from './index'

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Видео с монахами (саньяси)</h1>

      <div className='w-full flex justify-center'>
        <ul className='grid grid-cols-1 gap-3 lg:gap-5'>
          {videoSanyasi.map((item) => (
            <li key={item.id} className='w-full flex flex-col'>
              <Link href={`/video/sanyasi/${item.id}`} className='text-sm lg:text-base dark:text-gray-300'>
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