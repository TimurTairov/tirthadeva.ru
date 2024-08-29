'use client'
import ImageGallery from "react-image-gallery";
import { imagesSertificates, imagesSertificates2 } from '@/helpers/foto'

const Sertificates = () => {
  const settings = {
    showBullets: false,
    showIndex: true,
    slideDuration: 1000,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
  }
  return (
    <div className='main-container'>
      <h1 className="main-title">Сертификаты</h1>
      <h5 className='mt-10 mb-1 text-2xl text-center w-full'>Сертификаты и памятные листы</h5>
      <ImageGallery items={imagesSertificates} {...settings} />
      <h5 className='mt-10 mb-1 text-2xl text-center w-full'>Сертификаты о прохождении интернет йога курсов</h5>
      <ImageGallery items={imagesSertificates2} {...settings} />

    </div>
  )
}

export default Sertificates