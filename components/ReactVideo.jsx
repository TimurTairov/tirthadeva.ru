'use client'
import ReactPlayer from 'react-player/lazy'
import video from '@/public/'

const ReactVideo = () => {
  return (
    <div>
      <ReactPlayer url={video} />
    </div>
  )
}

export default ReactVideo
