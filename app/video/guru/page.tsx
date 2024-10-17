import Link from "next/link"
import { videoGuru } from "./index"

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Видео с Гуру</h1>

      <div className='w-full flex justify-center'>
        <ul className='grid grid-cols-1 gap-3 lg:gap-5'>
          {videoGuru.map((item, index) => (
            <li key={item.id} className='w-full  flex flex-col'>
              <Link href={`/video/guru/${item.id}`} className='text-sm lg:text-base'>
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