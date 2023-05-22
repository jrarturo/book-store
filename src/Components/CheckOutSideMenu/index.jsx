import { useContext } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { BookShopContext } from '../../Context'
import OrderCart from '../OrderCart'

const CheckOutSideMenu = () => {
  const context = useContext(BookShopContext)
  console.log(context.cartProducts)

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } w-[420px] h-[calc(50vh-70px)] flex-col fixed bottom-10 right-0 border border-blue-400 rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My order</h2>
        <div>
          <HiOutlineX
            className='text-xl font-bold pointer'
            onClick={() => {
              context.closeCheckoutSideMenu()
            }}
          />
        </div>
      </div>
      <div className='p-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-lg'>
        {context.cartProducts.map((product) => (
          <OrderCart
            id={product.id}
            key={product.id}
            title={product.volumeInfo.title}
            imgUrl={product.volumeInfo.imageLinks.smallThumbnail}
            price={product.saleInfo?.listPrice.amount.toLocaleString('es-CO')}
            currency={product.saleInfo?.listPrice.currencyCode}
            handleDeleteBook={context.deleteBook}
          />
        ))}
      </div>
    </aside>
  )
}

export default CheckOutSideMenu
