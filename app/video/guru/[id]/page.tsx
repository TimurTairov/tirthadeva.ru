import VideoPlayer from '@/components/VideoPlayer'
import { videoGuru } from '../index'


const getVideo = (id: number) => {
  const video = videoGuru.find(item => item.id == id)
  return video
}

export default async function VideoGuru({ params }: { params: Promise<{ id: number }> }) {
  const id = (await params).id
  const myVideo = getVideo(id)
  return (
    <div className='main-container'>
      <h1 className='main-title'>{myVideo?.title}</h1>
      <VideoPlayer src={myVideo?.url} sourse={myVideo?.sourse} />
    </div>
  )
}

