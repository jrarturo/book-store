import { BrowserRouter, useRoutes } from 'react-router-dom'
import Categories from '../../Components/Categories'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
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
      path: '/my-orders/last',
      element: <MyOrder />
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder />
    },
    {
      path: '/*',
      element: <NotFound />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '/categories',
      element: <Categories />
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
        <CheckOutSideMenu />
      </BrowserRouter>
    </BookShopProvider>
  )
}

export default App
