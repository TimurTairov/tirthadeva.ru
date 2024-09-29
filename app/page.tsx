"use client"
import Image from "next/image"
import Link from "next/link"
import Gradient from "@/components/Gradient"
import nataraja from '@/public/nataraja.png'
import yog1 from '@/public/yog1.png'
import yog4 from '@/public/yog4.png'
import yog5 from '@/public/yog5.png'
import yog6 from '@/public/yog6.png'
import Hero from '@/components/Hero'
import Price from '@/components/Price'
import Testimonial from '@/components/Testimonial'
import YogaOnline from "@/components/YogaOnline"
import MyGurus from "@/components/MyGurus"
import Mission from "@/components/Mission"
import YogaDirections from '@/components/YogaDirections'
import Experience from '@/components/Experience'
import TeachingYoga from "@/components/TeachingYoga"

export default function Home() {

  return (
    <main className="max-w-screen-xl xl:mx-auto mx-2 flex flex-col items-center justify-center">
      <Gradient />
      <Hero />
      <Mission />
      <MyGurus />
      <YogaDirections />
      <Experience />
      <TeachingYoga />
      <YogaOnline />
      <Testimonial />
      <Price />

      <div className="w-full flex justify-center">
        <div className='mt-5 md:mt-10 lg:mt-20 p-2 w-10/12 lg:w-9/12 grid grid-cols-2 grid-row-4 md:grid-cols-4'>
          <Link href="/osebe/education" className="m-1">Образование</Link>
          <Link href="/osebe/certificates" className="m-1">Сертификаты</Link>
          <Link href="/yoga/feedbacks" className="m-1">Отзывы</Link>
          <Link href="/osebe/contacts" className="m-1">Контакты</Link>
          <Link href="/tradition/master" className="m-1">Мастер</Link>
          <Link href="/tradition/links" className="m-1">Ссылки</Link>
          <Link href="/yoga/basicrules" className="m-1">Хатха йога</Link>
          <Link href="/yoga/nauli" className="m-1">Наули</Link>
        </div>

      </div>

      <div className='mt-5 md:mt-10 lg:mt-20 flex items-end justify-around w-full'>
        <Image src={yog1} width={108} height={108} alt="yog 1" />
        <Image src={yog5} width={95} height={95} alt="yog 2" />
        <Image src={nataraja} width={115} height={115} alt="Lord Shiva Nataraja" />
        <Image src={yog6} width={95} height={95} alt="yog 3" />
        <Image src={yog4} width={108} height={108} alt="yog 4" />
      </div>


    </main >
  )
}
