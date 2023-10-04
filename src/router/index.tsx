import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from '@pages/Home/Layout'

import Home from '@pages/Home'

const Router = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'register',
          element: 'register',
        },
        {
          path: 'login',
          element: 'home',
        },
        {
          path: '*',
          element: 'NotFound',
        },
      ],
    },
  ])

  return <RouterProvider router={routes} />
}

export default Router
