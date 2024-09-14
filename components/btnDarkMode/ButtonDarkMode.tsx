"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"
import sun from "./sun.svg"
import moon from "./moon.svg"


const ButtonDarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [image, setImage] = useState(sun)

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    if (theme == "dark") {
      setImage(moon)
    }
    if (theme == "light") {
      setImage(sun)
    }
  }, [theme])

  return (
    <button
      onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}>
      <Image width={23} height={23} src={image} alt="darkModeBtn" className="dark:bg-slate-700 h-11 w-11 border-2 p-1 border-gray-400 rounded-full" />
    </button>
  )
}

export default ButtonDarkMode