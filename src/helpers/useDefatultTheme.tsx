import { useState, useEffect } from 'react'

function useDefatultTheme() {
  const [defaultThemeMode, setDefaultThemeMode] = useState<string>('')

  useEffect(() => {
    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'ligth'
    setDefaultThemeMode(defaultTheme)
  }, [])

  return defaultThemeMode
}

export default useDefatultTheme
