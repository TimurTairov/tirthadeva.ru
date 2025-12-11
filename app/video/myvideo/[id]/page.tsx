import VideoPlayer from '@/components/VideoPlayer'
import { myVideos } from '../index'

type Props = {
  params: {
    id: number;
  }
}

const getVideo = (id: number) => {
  const video = myVideos.find(item => item.id == id)
  return video
}

const MyVideo = ({ params: { id } }: Props) => {
  const myVideo = getVideo(id)
  return (
    <div className='main-container'>
      <h1 className='main-title'>{myVideo?.title}</h1>
      <VideoPlayer src={myVideo?.url} sourse={myVideo?.sourse} />
    </div>
  )
}

export default MyVideo