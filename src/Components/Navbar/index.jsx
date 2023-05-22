import { useContext } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { BookShopContext } from '../../Context'
import Books from '../../assets/Icons/Books'

const NavBar = () => {
  const context = useContext(BookShopContext)
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between items-center fixed z-20 top-0 w-full py-2 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <div className='flex justify-items-center items-center gap-1'>
            <Books />
            <NavLink to='/'>BookStore</NavLink>
          </div>
        </li>
        <li className='font-semibold italic'>
          <NavLink
            to='/my-account'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/categories'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/search'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Search
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='italic text-xs text-slate-600'>alvaro@bookstore.com</li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li className='flex items-center gap-1'>
          <HiOutlineShoppingCart /> {context.count}
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
