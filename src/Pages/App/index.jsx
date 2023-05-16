import { BrowserRouter, useRoutes } from 'react-router-dom'
import NavBar from '../../Components/Navbar'
import { BookShopProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/my-account',
      element: <MyAccount />
    },
    {
      path: '/my-order',
      element: <MyOrder />
    },
    {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/*',
      element: <NotFound />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    }
  ])

  return routes
}

const App = () => {
  return (
    <BookShopProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </BookShopProvider>
  )
}

export default App
