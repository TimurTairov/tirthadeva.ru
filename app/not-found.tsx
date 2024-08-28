import Link from 'next/link'

export default function NotFound() {
  return <div>
    <h1>Страница не найдена – 404!</h1>
    <div>
      <Link href="/">Вернуться на Главную страницу</Link>
    </div>
  </div>
}