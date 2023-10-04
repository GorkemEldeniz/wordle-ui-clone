import { ThemeContext } from '@libs/Theme/ThemeProvider'
import { useContext } from 'react'

function useTheme() {
  return useContext(ThemeContext)
}

export default useTheme
