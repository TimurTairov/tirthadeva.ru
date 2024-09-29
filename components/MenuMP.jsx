import Link from 'next/link'

const MenuMP = () => {
  return (
    <div className="mt-5">
      <h5 className="w-full subTitleMP text-center">
        Продолжите путешествие по следующим ссылкам:
      </h5>
      <div className="w-full flex justify-center">
        <div className="mt-5 md:mt-10 lg:mt-20 p-2 w-10/12 lg:w-9/12 grid grid-cols-2 grid-row-4 md:grid-cols-4">
          <Link href="/osebe/education" className="m-1">
            Образование
          </Link>
          <Link href="/osebe/certificates" className="m-1">
            Сертификаты
          </Link>
          <Link href="/yoga/feedbacks" className="m-1">
            Отзывы
          </Link>
          <Link href="/osebe/contacts" className="m-1">
            Контакты
          </Link>
          <Link href="/tradition/master" className="m-1">
            Мастер
          </Link>
          <Link href="/tradition/links" className="m-1">
            Ссылки
          </Link>
          <Link href="/yoga/basicrules" className="m-1">
            Хатха йога
          </Link>
          <Link href="/yoga/nauli" className="m-1">
            Наули
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MenuMP
