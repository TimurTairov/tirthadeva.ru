'use client'
import Link from "next/link";
import { FaSun } from "react-icons/fa"
import { FcApproval } from "react-icons/fc";
import { BsDot } from "react-icons/bs";
import ImageGallery from "react-image-gallery";
import { imagesUcheba } from '@/helpers/foto'

const page = () => {


  return (
    <div className='main-container font-light'>

      <h1 className="main-title">Образование</h1>

      <h5 className='mt-5 mb-1 font-semibold text-2xl flex items-center'>
        <FcApproval className='me-2' color='orange' /> Основное образование
      </h5>
      <p>
        1. ВВИА им. проф. Н.Е.Жуковского, АСУ (2003-2008 гг).
      </p>
      <p>
        2. МИРБИС, финансы и кредит (2008-2011 гг).
      </p>

      <h5 className='mt-5 mb-1 font-semibold text-2xl flex items-center'>
        <FcApproval className='me-2' color='orange' /> Образование в йоге
      </h5>

      <p>
        1. 2013-2017 гг. - <a href='https://openyoga.ru/' target='_blank' rel="noreferrer">(МОЙУ)</a> Международный открытый йога университет. Обучение по направлениям - хатха йога, крийя, мантра, пранаяма, а также прохождение более 50 семинаров и ритритов, в том числе в Индии и Непале.
      </p>
      <p>
        2. 2020 г. - <a href='https://yogatechnology.ru/' target='_blank' rel="noreferrer">Высшая школа йога технологий.</a> Обучающий курс Инструктор йоги в гамаках.
      </p>
      <p>
        3. 2021 г. - по н.в. - <a href='https://www.advayta.org' target='_blank' rel="noreferrer">(ВОСД)</a> Всемирная община Санатана Дхармы. Обучение йоги в традиции Адвайта сиддхов.
      </p>
      <p>• Хатха йога, кундалини йога, медитация, созерцание</p>
      <p>• Джняна и лайя йога</p>
      <p>• Ритуальная практика (Бхаджан мандала, сутра, хома, пуджа, абхишека)</p>
      <p>• Философия Адвайта Веданты и йоги сиддхов</p>
      <p>• Ритритная практика в Ашраме</p>


      <h5 className='mt-5 mb-1 font-semibold text-2xl flex items-center'>
        <FcApproval className='me-2' color='orange' />
        Неформальное обучение
      </h5>

      <p>• 2015 г. - обучение йоги у <a href='http://yogagu.ru/' target='_blank' rel="noreferrer">Виктора Кожаринова </a> (ученик Сатьянанда Сарасвати, Бихарская школа йоги). Неформально в поездках по Индии и в Москве.
      </p>
      <p>• 2018 г. - обучение крийя йоге в традициии йоги Рамайяхи. Ведущий  Святослав Дубянский.</p>
      <p>• 2019 г. - обучение Кундалини йоге с Учителем из Варанаси (Индия) Satayanand Giri (Lali Baba).</p>


      <p className='mt-5'>
        Ps: в сентябре 2023 года получил дикшу и духовное имя - Тирхадева (посвящение) у своего коренного <a href='/master'>Гуру</a>.<br />
        До этого было имя Тимур Брахмачари.
        <br /> <br />
      </p>
      <div className="flex gap-5 m-5">
        <Link href="/osebe/certificates" className="my-1">Сертификаты</Link>
        <Link href="/osebe/myfoto" className="my-1">Фотографии</Link>
        <Link href="/yoga/schedule" className="my-1">Расписание</Link>
        <Link href="/yoga/feedbacks" className="my-1">Отзывы</Link>
      </div>

      <ImageGallery items={imagesUcheba} />

    </div >
  )
}

export default page