import { Category, Login, Register } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PublicLayout, RegisterLoginLayout } from './layouts'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <Category />
        }
      ]
    },
    {
      element: <RegisterLoginLayout />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
