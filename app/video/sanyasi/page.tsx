import { Suspense } from 'react'
import VideoPlayer from '@/components/VideoPlayer'

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Видео с монахами (саньяси)</h1>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241205&hd=2" vk />
        <p>Раманатха - Что такое чистое видение</p>
      </Suspense>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241129&hd=2" vk />
        <p>Рамантха - Этапы развития концентрации внимания</p>
      </Suspense>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241113&hd=2" vk />
        <p>Санаткумара - Три условия для успешного духовного продвижения</p>
      </Suspense>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241060&hd=2" vk />
        <p>Ответы на вопросы практикующих. Санньяси Трайлокьядеви Гири</p>
      </Suspense>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241056&hd=2" vk />
        <p>Смысл моей жизни. Кто живёт эту жизнь? Свамини Адвайтавадини Гири</p>
      </Suspense>

    </div>
  )
}

export default page