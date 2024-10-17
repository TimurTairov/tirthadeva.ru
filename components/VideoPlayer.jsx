const VideoPlayer = ({ src, sourse }) => {
  let allow =
    'autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'

  if (sourse === 'tutube') {
    allow = 'clipboard-write; autoplay'
  } else {
    allow =
      'autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
  }
  // const vkontakte =
  //   'autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
  // const rt = 'clipboard-write; autoplay'
  return (
    <iframe src={src} allow={allow} allowFullScreen className="video"></iframe>
  )
}

export default VideoPlayer
