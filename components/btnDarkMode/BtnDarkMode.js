'use client'
import Image from 'next/image'
import { useEffect } from 'react'
//import { useLocalStorage } from './../../utils/useLocalStorage'
//import detectDarkMode from '../../utils/detectDarkMode'
import sun from "./sun.svg"
import moon from "./moon.svg"


const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useState('Light')

  //const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light')

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')

    }
    else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light'
        setDarkMode(newColorScheme)
      })

  })

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  // const btnNormal = "dark-mode-btn"
  // const btnActive = "dark-mode-btn dark-mode-btn--active"

  return (
    <button onClick={toggleDarkMode} className='dark-mode-btn rounded-full bg-slate-200'>
      <Image src={darkMode === 'light' ? sun : moon} width={17} height={17} alt="dark mode" className='h-10 w-10 border p-1 rounded-full' />
    </button>
  )
}


export default BtnDarkMode