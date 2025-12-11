'use client'
import ImageGallery from "react-image-gallery";
import { imagesYoga, imagesIndia, imagesUcheba } from '@/helpers/foto'
import { settings } from "@/helpers/FotoSettengs";
import "react-image-gallery/styles/css/image-gallery.css";

const page = () => {
  return (
    <div className='main-container'>
      <h1 className="main-title">Фото</h1>
      <div className="py-5 mx-auto flex flex-col items-center justify-center">
        <h5 className='mb-1 text-xs md:text-sm text-center w-full'>Мои фотографии</h5>
        <ImageGallery items={imagesYoga} {...settings} />
        <h5 className='mt-10 mb-1 text-xs md:text-sm text-center w-full'>Фотографии с семинаров и ритритов и курсов по йоге</h5>
        <ImageGallery items={imagesUcheba} {...settings} />
        <h5 className='mt-10 mb-1 text-xs md:text-sm text-center w-full'>Фотографии из Индии и Непала</h5>
        <ImageGallery items={imagesIndia} {...settings} />
      </div>

    </div>
  )
}

export default page