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
import MenuMP from "@/components/MenuMP"
import PngYogiMP from "@/components/PngYogiMP"

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
      <MenuMP />
      <PngYogiMP />
    </main >
  )
}
