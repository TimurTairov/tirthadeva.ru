'use client'
import ImageGallery from "react-image-gallery";
import { imagesSertificates, imagesSertificates2 } from '@/helpers/foto'
import { settings } from "@/helpers/FotoSettengs";

const Sertificates = () => {

  return (
    <div className='main-container'>
      <h1 className="main-title">Сертификаты</h1>
      <div className="mx-auto max-w-2xl flex flex-col items-center justify-center">
        <h5 className='mt-10 mb-1 text-xs md:text-lg text-center w-full'>Сертификаты и памятные листы</h5>
        <ImageGallery items={imagesSertificates} {...settings} />
        <p className='mt-5 text-base'>
          <b>Ps:</b> в сентябре 2023 года получил дикшу и духовное имя - Тирхадева (посвящение) у своего коренного <a href='/master'>Гуру</a>.
          До этого носил имя Тимур Брахмачари, которое фигурирует на некоторых сертификатах и памятных листах.
          <br /> <br />
        </p>
        <h5 className='mt-10 mb-1 text-xs md:text-lg text-center w-full'>Сертификаты о прохождении интернет йога курсов</h5>
        <ImageGallery items={imagesSertificates2} {...settings} />
      </div>

    </div>
  )
}

export default Sertificates