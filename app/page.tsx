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
import { FaArrowTurnUp } from "react-icons/fa6";

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
      <a href="#header" className="mt-10 flex items-center subTitleMP border-2 p-3 rounded-full font-bold bg-slate-50 hover:bg-white hover:border-indigo-700 dark:hover:border-emerald-400">Наверх <FaArrowTurnUp className="ml-2" /></a>
      <PngYogiMP />
    </main >
  )
}
