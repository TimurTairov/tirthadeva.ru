'use client'
import ImageGallery from "react-image-gallery";
import { imagesYoga, imagesIndia } from '@/helpers/foto'

const page = () => {
  return (
    <div className='max-w-screen-xl min-h-screen mx-auto flex flex-col items-start justify-between text-xl'>
      <h1 className="text-4xl font-semibold text-center w-full">Мои фото</h1>
      <h5 className='mt-10 mb-1 font-semibold text-2xl text-center w-full'>Йога</h5>
      <ImageGallery items={imagesYoga} />
      <h5 className='mt-10 mb-1 font-semibold text-2xl text-center w-full'>Индия и Непал</h5>
      <ImageGallery items={imagesIndia} />

    </div>
  )
}

export default page