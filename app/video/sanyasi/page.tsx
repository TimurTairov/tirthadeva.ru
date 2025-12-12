import Link from "next/link"
import { videoSanyasi } from './index'
import { FaOm } from "react-icons/fa6";

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Видео с монахами (саньяси)</h1>

      <div className='w-full flex justify-center'>
        <ul className='grid grid-cols-1 gap-3 lg:gap-5'>
          {videoSanyasi.map((item) => (
            <li key={item.id} className='w-full flex flex-col'>
              <Link href={`/video/sanyasi/${item.id}`} className='text-sm lg:text-base dark:text-gray-300'>
                <FaOm className="text-indigo-600 dark:text-indigo-400 shrink-0 inline mr-1 mb-1" />
                <span>
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default page