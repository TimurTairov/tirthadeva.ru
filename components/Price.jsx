import Image from 'next/image'
import { AiOutlineCheck } from 'react-icons/ai'
import rubleSVG from '@/public/SVG/ruble.svg'

const Price = () => {
  return (
    <div className="max-w-7xl mt-14 lg:mt-20">
      <div className="w-full flex items-center justify-center">
        <Image
          src={rubleSVG}
          alt="Рубль"
          loading="lazy"
          className="w-10 h-10 mr-2 rounded-full p-2 border border-gray-600  dark:invert"
        />
        <p className="titleMP text-center ">Цены</p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch lg:gap-8 ">
        {/* <div className="divide-y dark:divide-gray-200 divide-gray-400 rounded-2xl bg-gray-50 dark:bg-transparent border border-slate-400 dark:border-slate-600 shadow-sm shadow-gray-400 dark:shadow-gray-600">
          <div className="p-5 md:p-3 lg:p-6 lg:px-8">
            <h2 className="subTitleMP text-gray-900 dark:text-gray-100">
              Начальный план
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm">
              Только медитация
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="titleMP text-gray-900 dark:text-gray-100">
                Бесплатно
              </strong>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                /donation
              </span>
            </p>

            <a
              className="mt-5 lg:mt-7 flare-button text-white dark:text-white"
              href="whatsapp://send?phone=79672067710"
            >
              Начать практику
            </a>
          </div>

          <div className="p-5 md:p-3 lg:p-6 lg:px-8">
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100 sm:text-xl">
              Что включено:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4 textMP">
              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Медитация
                </span>
              </li>

              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Поддержка в чате
                </span>
              </li>

              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Трансляция в Zoom
                </span>
              </li>
            </ul>
          </div>
        </div> */}

        <div className="divide-y dark:divide-gray-200 divide-gray-400 rounded-2xl bg-gray-50 dark:bg-transparent border border-slate-400 dark:border-slate-600 shadow-sm shadow-gray-400 dark:shadow-gray-600">
          <div className="p-5 md:p-3 lg:p-6 lg:px-8">
            <h2 className="subTitleMP text-gray-900 dark:text-gray-100">
              Базовый план
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm">
              Хатха, кундалини, медитация
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="titleMP text-gray-900 dark:text-gray-100">
                500₽
              </strong>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                / занятие
              </span>
            </p>

            <a
              className="mt-5 lg:mt-7 flare-button text-white dark:text-white"
              href="whatsapp://send?phone=79672067710"
            >
              Начать практику
            </a>
          </div>

          <div className="p-5 md:p-3 lg:p-6 lg:px-8">
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100 sm:text-xl">
              Что включено:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4 textMP">
              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Хатха йога
                </span>
              </li>

              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Кундалини йога
                </span>
              </li>

              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Медитация
                </span>
              </li>

              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Трансляция в Zoom
                </span>
              </li>

              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Поддержка в чате
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divide-y dark:divide-gray-200 divide-gray-400  rounded-2xl bg-gray-50 dark:bg-transparent border border-slate-400 dark:border-slate-600 shadow-sm shadow-gray-400 dark:shadow-gray-600">
          <div className="p-5 md:p-3 lg:p-6 lg:px-8">
            <h2 className="subTitleMP text-gray-900 dark:text-gray-100">
              Персональный план
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm">
              Индивидуально!
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="titleMP text-gray-900 dark:text-gray-100 ">
                4900₽
              </strong>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                / занятие
              </span>
            </p>

            <a
              className="mt-5 lg:mt-7 flare-button text-white dark:text-white"
              href="whatsapp://send?phone=79672067710"
            >
              Начать практику
            </a>
          </div>

          <div className="p-5 md:p-3 lg:p-6 lg:px-8">
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100 sm:text-xl">
              Что включено:
            </p>
            <ul className="mt-2 space-y-2 sm:mt-4 textMP">
              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Индивидуальный подход
                </span>
              </li>

              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Личные консультации
                </span>
              </li>

              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Поддержка в чате
                </span>
              </li>

              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Онлайн или оффлайн занятия
                </span>
              </li>

              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Персональный план развития{' '}
                </span>
              </li>

              <li className="flex items-center gap-1">
                <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700" />
                <span className="text-gray-700 dark:text-gray-200">
                  Отслеживание результатов
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price
