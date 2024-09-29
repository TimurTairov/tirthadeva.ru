import Image from 'next/image'
import shiva from '@/public/SVG/shiva.svg'
import guru from '@/public/MuGurus/guru108-2.jpg'
import vvz from '@/public/MuGurus/vvz108.jpg'
import kozharinov from '@/public/MuGurus/kozharinov108.jpg'
import dubyanskii from '@/public/MuGurus/dubyanskii108.jpg'
import lalibaba from '@/public/MuGurus/lalibaba108.jpg'
import ramanatha from '@/public/MuGurus/ramanatha108.jpg'
import NavigationButton from '@/components/NavigationButton'

const MyGurus = () => {
  return (
    <section className="bg-white dark:bg-slate-800 mt-5 md:mt-10 lg:mt-20">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="w-full flex items-center justify-center mt-5">
          <Image
            src={shiva}
            alt="Йог медитация"
            className="w-10 h-10 mr-2 rounded-full p-1 border border-gray-600  dark:invert"
          />
          <h5 className="titleMP text-center">Учителя</h5>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-50 dark:bg-slate-700 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                src={guru}
                width={20}
                height={20}
                className="size-14 p-1 border rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900 dark:text-gray-100">
                  Свами Вишнудевананда Гири
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-200">
              Коренной Учитель в традиции Пратьякша Адвайта сиддхов.
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 dark:bg-slate-700 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                src={ramanatha}
                width={20}
                height={20}
                className="size-14 p-1 border rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900 dark:text-gray-100">
                  Раманатха Гири
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-200">
              Наставник в традиции Пратьякша Адвайта сиддхов.
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 dark:bg-slate-700 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                width={20}
                height={20}
                src={vvz}
                className="size-14 p-1 border rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900 dark:text-gray-100">
                  Вадим Запорожцев
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-200">
              Первый Учитель. Школа открытой йоги.
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 dark:bg-slate-700 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                width={20}
                height={20}
                src={kozharinov}
                className="size-14 p-1 border rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900 dark:text-gray-100">
                  Виктор Кожаринов
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-200">
              Бихарская школа йоги (Индия). Обучение в поездках по Индии и
              Непалу.
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 dark:bg-slate-700 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                width={20}
                height={20}
                src={dubyanskii}
                className="size-14 p-1 border rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900 dark:text-gray-100">
                  Святослав Дубянский
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-200">
              Традиция крия йоги Рамаяхи.
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 dark:bg-slate-700 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                width={20}
                height={20}
                src={lalibaba}
                className="size-14 p-1 border rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900 dark:text-gray-100">
                  Satayanand Giri (Lali Baba).
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-200">
              Учитель йоги из Варанаси (Индия). Традиция Тантры.
            </p>
          </blockquote>
        </div>
      </div>
      <div className="mt-5">
        <NavigationButton
          title={'Образование в йоге'}
          link={'/osebe/education'}
        />
      </div>
    </section>
  )
}

export default MyGurus
