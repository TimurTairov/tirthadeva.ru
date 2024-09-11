const VideoPlayer = ({ src, vk = false, rt = false }) => {
  const vkontakte =
    'autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
  const rutube = 'clipboard-write; autoplay'
  return (
    <iframe
      src={src}
      allow={vk === 'true' ? vkontakte : rt === 'true' ? rutube : vkontakte}
      allowFullScreen
      className="video"
    ></iframe>
  )
}

export default VideoPlayer
