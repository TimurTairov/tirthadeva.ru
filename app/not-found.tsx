import Link from 'next/link'

export default function NotFound() {
  return <div className='main-container'>
    <h1 className='main-title'>Страница не найдена – Ошибка 404!</h1>
    <div className='w-full flex justify-center'>
      <Link href="/">Вернуться на главную страницу</Link>
    </div>
  </div>
}