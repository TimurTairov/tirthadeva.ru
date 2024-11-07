import YogaOnline from "@/components/YogaOnline"
import Hero from '@/components/Hero'
import TeachingYoga from "@/components/TeachingYoga"
import Testimonial from '@/components/Testimonial'
import Price from '@/components/Price'
import foto from "@/public/BlogImages/02.jpg"

const page = () => {
  return (
    <div className='main-container'>
      <Hero title={'Йога онлайн'} foto={foto} />
      <TeachingYoga />
      <Testimonial />
      <YogaOnline />
      <Price />
      <br />
    </div>
  )
}

export default page