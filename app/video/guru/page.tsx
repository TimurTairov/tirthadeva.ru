import { Suspense } from 'react'
import VideoPlayer from '@/components/VideoPlayer'

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Видео с Гуру</h1>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241012&hd=2" vk />
        <p>Кундалини - Самадхи и Сахадж - Самадхи, в чём разница?</p>
      </Suspense>


      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241118&hd=2" vk />
        <p>О Нирвикальпа Самадхи. Из сатсанга Шри Гуру Свами Вишнудевананда Гири Махараджа</p>
      </Suspense>


      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241180&hd=2" vk />
        <p>Ловушка пустоты, состояние пралаякала</p>
      </Suspense>


      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241286&hd=2" vk />
        <p>Оджас, теджас, прана. </p>
      </Suspense>


      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241089&hd=2" vk />
        <p>Свет матери и сына.</p>
      </Suspense>


      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456241088&hd=2" vk />
        <p>Бог - не чужой.</p>
      </Suspense>


      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456240899&hd=2" vk />
        <p>Смысл обретения Символа Веры и Прибежища для души 🕉</p>
      </Suspense>


      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=40782986&id=456240701&hd=2" vk />
        <p>Как отличить игры ума от просветления</p>
      </Suspense>


    </div>
  )
}

export default page