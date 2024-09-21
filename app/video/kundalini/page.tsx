import { Suspense } from 'react'
import VideoPlayer from '@/components/VideoPlayer'

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Кундалини йога</h1>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://rutube.ru/play/embed/4d89041f8b85d642acc13a837508df56?skinColor=e53935" rt />
        <p>Крийя комплекс сиддхов. Кундалини йога для начинающих.</p>
      </Suspense>

    </div>
  )
}

export default page