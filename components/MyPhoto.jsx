'use client'
import ImageGallery from 'react-image-gallery'
import { myPhoto } from '@/helpers/foto'

const MyPhoto = () => {
  const settings = {
    showThumbnails: false,
    showIndex: false,
    slideDuration: 500,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
  }
  return (
    <div className="flex flex-col justify-center mt-10 lg:mt-0 ">
      <ImageGallery
        items={myPhoto}
        {...settings}
        className="w-full h-auto lg:h-[20rem] xl:w-[60rem] rounded-3xl"
      />
    </div>
  )
}

export default MyPhoto
