import Image from 'next/image'
import yogaasana2SVG from '@/public/SVG/yoga-asana2.svg'
import NavigationButton from '@/components/NavigationButton'

const TeachingYoga = () => {
  return (
    <div className="w-full mt-20 lg:mt-40 rounded-md">
      <div className="w-full flex items-center justify-center">
        <Image
          src={yogaasana2SVG}
          alt="Йога асана онлайн"
          loading="lazy"
          className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600 dark:invert hoverIcon"
        />
        <h5 className="titleMP text-center">Как я преподаю йогу</h5>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 mt-5 gap-3 md:gap-5">
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center shadow-md">
          <p className="textMP">
            Делаю акцент на гармонию, созерцание и осознанность
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center shadow-md">
          <p className="textMP">
            Даю асаны в статике, в легком медитативном состоянии
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center shadow-md">
          <p className="textMP">
            Обьясняю разные вариации асан, в зависимости от уровня подготовки
            практикующих{' '}
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center shadow-md">
          <p className="textMP">
            Исключаю крайности: позы йоги не должны быть слишком сложными или
            слишком лёгкими
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center shadow-md">
          <p className="textMP">
            Чередую напряжение и расслабление: даю небольшой отдых между асанами
          </p>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-slate-700 p-3 lg:p-6 rounded-md m-1 items-start justify-center shadow-md">
          <p className="textMP">
            Рекомендую выходить из асан самостоятельно, если есть в этом
            необходимость
          </p>
        </div>
      </div>
      <div className="mt-5">
        <NavigationButton title={'Подробнее ...'} link={'/blog/hatha'} />
      </div>
    </div>
  )
}

export default TeachingYoga
