import Link from 'next/link'
import Image from 'next/image'
import { myVideos } from './index'

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Мои видео</h1>
      <div className='w-full flex justify-center py-5'>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 xl:gap-10'>
          {myVideos.map(item => (
            <li key={item.id} className='w-full lg:w-60 flex flex-col'>
              <Link href={`/video/myvideo/${item.id}`} className='text-sm'>
                <Image src={item.img} width={384} height={216} alt={item.title} className='w-full h-auto border rounded-md' />
              </Link>
              <Link href={`/video/myvideo/${item.id}`} className='text-xs lg:text-sm font-light h-10 mt-2 dark:text-gray-300'>
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