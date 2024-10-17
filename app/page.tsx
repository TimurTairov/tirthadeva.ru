import Gradient from "@/components/Gradient"
import Hero from '@/components/Hero'
import Price from '@/components/Price'
import Testimonial from '@/components/Testimonial'
import YogaOnline from "@/components/YogaOnline"
import MyGurus from "@/components/MyGurus"
import Mission from "@/components/Mission"
import YogaDirections from '@/components/YogaDirections'
import Experience from '@/components/Experience'
import TeachingYoga from "@/components/TeachingYoga"
import PngYogiMP from "@/components/PngYogiMP"
import GoToTop from '@/components/GoToTop'
import Contacts from "@/components/Contacts"



export default function Home() {

  return (
    <main className="max-w-screen-xl xl:mx-auto mx-2 flex flex-col items-center justify-center">
      <Gradient />
      <Hero title={'Йога и медитация'} />
      <Mission />
      <MyGurus />
      <YogaDirections />
      <Experience />
      <TeachingYoga />
      <YogaOnline />
      <Testimonial />
      <Price />
      <Contacts />
      <GoToTop url={"/"} />
      <PngYogiMP />
    </main >
  )
}
