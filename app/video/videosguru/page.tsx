'use client'
const page = () => {
  return (
    <div className='main-container'>
      <h1 className="main-title">Видео с Гуру</h1>

      <iframe src="https://vk.com/video_ext.php?oid=40782986&id=456241286&hd=1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen className='video mt-10'></iframe>
      <p>Оджас, теджас, прана. Шри Гуру Свами Вишнудевананда Гири Махарадж.</p>

      <iframe src="https://vk.com/video_ext.php?oid=40782986&id=456241180&hd=2" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen className='video mt-10'></iframe>
      <p>Ловушка пустоты, состояние пралаякала</p>

    </div>
  )
}

export default page