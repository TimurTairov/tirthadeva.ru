import { Suspense } from 'react'
import VideoPlayer from '@/components/VideoPlayer'

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Медитация</h1>

      {/* <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://rutube.ru/play/embed/91f3ade5c932dca529ec8e20bc9fa2cc" rt />
        <p>Медитация Чандали.</p>
      </Suspense> */}
    </div>
  )
}

export default page