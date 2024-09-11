'use client'
import Image from 'next/image'
import { useEffect } from 'react'
//import { useLocalStorage } from './../../utils/useLocalStorage'
import useLocalStorage from '@/utils/useLocalStorage'
import { useLocalStorage2 } from '@/utils/useLocalStorage2'
import detectDarkMode from '../../utils/detectDarkMode'
//import { useTheme } from '../../store/store'
import "./style.css"
import sun from "./sun.svg"
import moon from "./moon.svg"


const BtnDarkMode = () => {
  // const [darkMode, setDarkMode] = useState('Light')

  const [darkMode, setDarkMode] = useLocalStorage2('darkMode', detectDarkMode())

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

  return (
    <button onClick={toggleDarkMode}>
      <Image width={23} height={23} src={darkMode === 'dark' ? moon : sun} alt="darkModeBtn" className="darkModeBtn h-11 w-11 border-2 p-1 border-gray-400 rounded-full" />
    </button>
  )
}


export default BtnDarkMode