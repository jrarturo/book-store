import { useContext } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { BookShopContext } from '../../Context'
import { calculateTotalPrice } from '../../utils'
import OrderCart from '../OrderCart'

const CheckOutSideMenu = () => {
  const context = useContext(BookShopContext)

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
      <div className='px-6 py-4'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>
            ${calculateTotalPrice(context.cartProducts).toLocaleString('es-CO')}{' '}
            COP
          </span>
        </p>
      </div>
    </aside>
  )
}

export default CheckOutSideMenu
