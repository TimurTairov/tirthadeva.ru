'use client'
import ImageGallery from "react-image-gallery";
import { imagesYoga, imagesIndia } from '@/helpers/foto'

const page = () => {
  return (
    <div className='main-container'>
      <h1 className="main-title">Мои фото</h1>
      <h5 className='mt-10 mb-1  text-2xl text-center w-full'>Фотографии с йоги</h5>
      <ImageGallery items={imagesYoga} />
      <h5 className='mt-10 mb-1 text-2xl text-center w-full'>Фотографии из Индии и Непала</h5>
      <ImageGallery items={imagesIndia} />

    </div>
  )
}

export default page