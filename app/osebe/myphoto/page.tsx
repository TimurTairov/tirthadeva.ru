'use client'
import ImageGallery from "react-image-gallery";
import { imagesYoga, imagesIndia } from '@/helpers/foto'
import { settings } from "@/helpers/FotoSettengs";

const page = () => {
  return (
    <div className='main-container'>
      <h1 className="main-title">Фото</h1>
      <h5 className='mt-10 mb-1  text-2xl text-center w-full'>Фотографии с йоги</h5>
      <ImageGallery items={imagesYoga} {...settings} />
      <h5 className='mt-10 mb-1 text-2xl text-center w-full'>Фотографии из Индии и Непала</h5>
      <ImageGallery items={imagesIndia} {...settings} />

    </div>
  )
}

export default page