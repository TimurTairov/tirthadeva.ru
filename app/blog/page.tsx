import Link from "next/link"
import Image from "next/image"
import { blogList } from "./index"

const Blog = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Блог</h1>
      <div className='w-full flex justify-center'>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-7 xl:gap-14 2xl:gap-20'>
          {blogList.map((item) => (
            <li key={item.id} className='w-80'>
              <Link href={item.url}>
                <Image src={item.img} width={384} height={216} alt={item.title} className='w-80 h-80 border-2 rounded-md hover:scale-105 transition-transform duration-1000' />
              </Link>
              <Link href={item.url} className='inline-block w-full text-center mt-3 text-xs md:text-sm text-gray-700 dark:text-gray-300'>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Blog 