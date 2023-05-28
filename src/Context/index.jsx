import { createContext, useState } from 'react'
import { calculateTotalPrice } from '../utils'

export const BookShopContext = createContext()

export const BookShopProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const [isBookDetailOpen, setIsBookDetailOpen] = useState(false)
  const openBookDetail = () => setIsBookDetailOpen(true)
  const closeBookDetail = () => setIsBookDetailOpen(false)

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  const [bookDetail, setBookDetail] = useState({
    volumeInfo: {
      imageLinks: {
        thumbnail: ''
      },
      title: '',
      authors: '',
      pageCount: ''
    }
  })

  // add to cart
  const [cartProducts, setCartProducts] = useState([])

  const deleteBook = (id) => {
    const newCartProducts = cartProducts.filter((product) => product.id !== id)
    setCartProducts(newCartProducts)
    setCount(newCartProducts.length)
  }

  // OrderCart

  const [orderCart, setOrderCart] = useState([])

  // handle checkout

  const handleCheckout = () => {
    const orderToSave = {
      // create a unique id
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString(),
      books: cartProducts,
      totalBooks: cartProducts.length,
      totalPrice: calculateTotalPrice(cartProducts)
    }
    setOrderCart([...orderCart, orderToSave])
    setCartProducts([])
    setCount(0)
    closeCheckoutSideMenu()
  }

  return (
    <BookShopContext.Provider
      value={{
        count,
        setCount,
        openBookDetail,
        closeBookDetail,
        isBookDetailOpen,
        bookDetail,
        setBookDetail,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        deleteBook,
        orderCart,
        setOrderCart,
        handleCheckout
      }}
    >
      {children}
    </BookShopContext.Provider>
  )
}
