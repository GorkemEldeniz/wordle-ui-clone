import {
  ReactElement,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import useDefatultTheme from '@helpers/useDefatultTheme'

type ThemeType = 'ligth' | 'dark' | 'system'

interface ContextType {
  theme: ThemeType
  handleTheme?: (params: ThemeType) => void
}

const intialValues = {
  theme: 'ligth' as ThemeType,
}

export const ThemeContext = createContext<ContextType>(intialValues)

function ThemeProvider({ children }: { children: ReactElement }) {
  const persistTheme = localStorage.getItem('theme')
  const defaultTheme = useDefatultTheme() as ThemeType
  const [theme, setTheme] = useState<ThemeType>('ligth')

  useEffect(() => {
    if (persistTheme === 'dark' || persistTheme === 'ligth') {
      setTheme(persistTheme)
    } else {
      setTheme(defaultTheme)
      localStorage.setItem('theme', defaultTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const handleTheme = (userTheme: ThemeType) => {
    setTheme(userTheme)
    localStorage.setItem('theme', userTheme)
  }

  const value = useMemo(
    () => ({
      theme,
      handleTheme,
    }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
