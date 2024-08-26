'use client'
import ImageGallery from "react-image-gallery";
import { imagesSertificates, imagesSertificates2 } from '@/helpers/foto'

const Sertificates = () => {
  return (
    <div className='main-container'>
      <h1 className="main-title">Сертификаты</h1>
      <h5 className='mt-10 mb-1 font-semibold text-2xl text-center w-full'>Сертификаты и памятные листы</h5>
      <ImageGallery items={imagesSertificates} />
      <h5 className='mt-10 mb-1 font-semibold text-2xl text-center w-full'>Сертификаты о прохождении интернет йога курсов</h5>
      <ImageGallery items={imagesSertificates2} />

    </div>
  )
}

export default Sertificates