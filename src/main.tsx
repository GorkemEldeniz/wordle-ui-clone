import ReactDOM from 'react-dom/client'

import Router from './router'

import './index.css'

import { store } from '@libs/Modal/store'
import { Provider } from 'react-redux'

import ThemeProvider from '@libs/Theme/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <Provider store={store}>
      <Router />
    </Provider>
  </ThemeProvider>
)
