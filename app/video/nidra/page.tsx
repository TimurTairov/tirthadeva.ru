import { Suspense } from 'react'
import VideoPlayer from '@/components/VideoPlayer'

const page = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Йога нидра</h1>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://rutube.ru/play/embed/4c76668954dd837187c9e0e92fe2c538/" rt />
        <p>Практика глубокого расслабления и релаксации. Йога нидра. 30 минут.</p>
      </Suspense>

      <Suspense fallback={<p>Загрузка ...</p>}>
        <VideoPlayer src="https://rutube.ru/play/embed/32237aae268e8cc623815f544f2d6189" rt />
        <p>Практика глубокого расслабления и релаксации. Йога нидра. 50 минут.</p>
      </Suspense>

    </div>
  )
}

export default page