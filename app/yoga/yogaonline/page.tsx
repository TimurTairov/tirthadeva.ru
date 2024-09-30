import YogaOnline from "@/components/YogaOnline"
import Hero from '@/components/Hero'

const page = () => {
  return (
    <div className='main-container'>
      <Hero title={'Йога онлайн'} />
      <YogaOnline />

    </div>
  )
}

export default page