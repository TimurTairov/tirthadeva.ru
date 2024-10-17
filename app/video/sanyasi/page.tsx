import Link from "next/link"
import { videoSanyasi } from './index'

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Видео с монахами (саньяси)</h1>

      <div className='w-full flex justify-center'>
        <ul className='grid grid-cols-1 gap-3 lg:gap-5'>
          {videoSanyasi.map((item, index) => (
            <li key={item.id} className='w-full  flex flex-col'>
              <Link href={`/video/guru/${item.id}`} className='text-sm lg:text-base'>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241205&hd=2" vk />
        <p>Раманатха - Что такое чистое видение</p>
      </Suspense> */}

      {/* <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241129&hd=2" vk />
        <p>Рамантха - Этапы развития концентрации внимания</p>
      </Suspense> */}

      {/* <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241113&hd=2" vk />
        <p>Санаткумара - Три условия для успешного духовного продвижения</p>
      </Suspense> */}

      {/* <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241060&hd=2" vk />
        <p>Ответы на вопросы практикующих. Санньяси Трайлокьядеви Гири</p>
      </Suspense> */}

      {/* <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241056&hd=2" vk />
        <p></p>
      </Suspense> */}

    </div>
  )
}

export default page