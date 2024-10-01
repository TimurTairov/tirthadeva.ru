import Image from 'next/image'
import myPhoto from '@/public/myPhoto-2.jpg'
import shiva from '@/public/SVG/shiva-7.svg'
import guru from '@/public/MuGurus/guru108-2.jpg'
import vvz from '@/public/MuGurus/vvz108.jpg'
import kozharinov from '@/public/MuGurus/kozharinov108.jpg'
import dubyanskii from '@/public/MuGurus/dubyanskii108.jpg'
import lalibaba from '@/public/MuGurus/lalibaba108.jpg'
import ramanatha from '@/public/MuGurus/ramanatha108.jpg'
import NavigationButton from '@/components/NavigationButton'

const MyGurus = () => {
  return (
    <section className="bg-white dark:bg-slate-800 mt-14 lg:mt-20 w-full">
      <div className="px-4">
        <div className="w-full flex items-center justify-center">
          <Image
            src={shiva}
            alt="Shiva"
            loading="lazy"
            className="w-10 h-10 mr-2 p-0.5 rounded-full border border-gray-600 dark:invert"
          />
          <h5 className="titleMP text-center">Учителя</h5>
        </div>

        <div className="mt-5 grid grid-cols-1 xl:grid-cols-2 md:gap-8">
          <blockquote className="rounded-lg bg-gray-50 dark:bg-slate-700 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-1 md:gap-3 lg:gap-5">
              <Image
                alt="Guru Svami Vishnudevananda Giri"
                src={guru}
                width={20}
                height={20}
                loading="lazy"
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
            <div className="flex items-center gap-1 md:gap-3 lg:gap-5">
              <Image
                alt="Ramanatha Giri"
                src={ramanatha}
                width={20}
                height={20}
                loading="lazy"
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
            <div className="flex items-center gap-1 md:gap-3 lg:gap-5">
              <Image
                alt="VVZ"
                width={20}
                height={20}
                src={vvz}
                loading="lazy"
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
            <div className="flex items-center gap-1 md:gap-3 lg:gap-5">
              <Image
                alt="Victor"
                width={20}
                height={20}
                src={kozharinov}
                loading="lazy"
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
            <div className="flex items-center gap-1 md:gap-3 lg:gap-5">
              <Image
                alt="Dubyansky"
                width={20}
                height={20}
                src={dubyanskii}
                loading="lazy"
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
            <div className="flex items-center gap-1 md:gap-3 lg:gap-5">
              <Image
                alt="Lali Baba"
                width={20}
                height={20}
                src={lalibaba}
                loading="lazy"
                className="size-14 p-1 border rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900 dark:text-gray-100">
                  Satayanand Giri (Lali Baba)
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
