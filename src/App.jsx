import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import ContextUser from './context/ContextUser'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Orders from './components/Orders/Orders'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/orders",
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/con",
          element: <ContextUser />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
