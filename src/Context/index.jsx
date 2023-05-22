import { createContext, useState } from 'react'

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
    const newCartProducts = cartProducts.filter(
      (product) => product.volumeInfo.id !== id
    )
    setCartProducts(newCartProducts)
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
        deleteBook
      }}
    >
      {children}
    </BookShopContext.Provider>
  )
}
