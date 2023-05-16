import { createContext, useState } from 'react'

export const BookShopContext = createContext()

export const BookShopProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  return (
    <BookShopContext.Provider value={{ count, setCount }}>
      {children}
    </BookShopContext.Provider>
  )
}
