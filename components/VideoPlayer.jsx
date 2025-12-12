const VideoPlayer = ({ src, sourse }) => {
  let allow =
    'autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'

  // if (sourse === 'rutube') {
  //   allow = 'clipboard-write; autoplay'
  // } else {
  //   allow =
  //     'autoplay; encrypted-media; fullscreen; accelerometer; gyroscope; picture-in-picture; screen-wake-lock;'
  // }

  switch (sourse) {
    case 'rutube':
      allow = 'clipboard-write; autoplay'
      break
    case 'vk':
      allow =
        'autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
      break
    case 'dzen':
      allow =
        'autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media'
      break
  }

  return (
    <iframe
      src={src}
      allow={allow}
      allowFullScreen
      data-testid="embed-iframe"
      scrolling="no"
      className="video"
    ></iframe>
  )
}

export default VideoPlayer

{
  /* <iframe src="https://vkvideo.ru/video_ext.php?oid=40782986&id=456240140&hash=9fc9f82257a2d6d5&hd=3" width="1280" height="720" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe> */
}

{
  /* <iframe width="480" height="270" src="https://dzen.ru/embed/oX0bE1SYJAAA?from_block=partner&from=zen&mute=0&autoplay=0&tv=0" allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media" data-testid="embed-iframe" frameborder="0" scrolling="no" allowfullscreen></iframe> */
}
