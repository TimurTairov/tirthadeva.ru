import type { Metadata } from "next";
import { Suspense } from 'react'
import VideoPlayer from '@/components/VideoPlayer'

export const metadata: Metadata = {
  title: "Видео по хатха йоге",
  description: "Хатха йога. Видео Тиртдэва.",
};

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Хатха йога</h1>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://rutube.ru/play/embed/84de8538da2d07e455069eafea1af31a/" rt />
        <p>Комплекс асан на раскрытие тазобедренных суставов. 60 минут.</p>
      </Suspense>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=5850909&id=456239995&hd=1" vk />
        <p>Хатха йога. Йога марафон. 90 минут.</p>
      </Suspense>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=5850909&id=456239994&hd=1" vk />
        <p>Хатха йога. Йога марафон. 90 минут.</p>
      </Suspense>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://rutube.ru/play/embed/d3a7364f5f44def1bc862f7444fb6c49" />
        <p>Хатха йога. Комплекс на спину. 90 минут.</p>
      </Suspense>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://vk.com/video_ext.php?oid=5850909&id=456239087&hd=2&hash=1864947de037efa4" vk />
        <p>Хатха йога. 75 минут.</p>
      </Suspense>

    </div>
  )
}

export default page