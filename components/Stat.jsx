import React from 'react'

const Stat = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 sm:text-4xl">
          Мой опыт в йоге
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-200 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolores laborum labore provident impedit esse recusandae facere libero
          harum sequi.
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Личной практики йоги
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            14 лет
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Ежедневных медитаций
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            9 лет
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Преподавания йоги
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            8 лет
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Проведённых занятий по йоге
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            2 К+
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Преподавания йоги
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            8 лет
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Преподавания йоги
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            8 лет
          </dd>
        </div>
      </dl>
    </div>
  )
}

export default Stat
