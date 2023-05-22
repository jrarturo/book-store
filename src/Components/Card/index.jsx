import { useContext } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { HiOutlinePlus } from 'react-icons/hi'
import { BookShopContext } from '../../Context'

const Card = (data) => {
  const context = useContext(BookShopContext)

  const handleOpenBookDetail = (bookDetail) => {
    context.openBookDetail()
    context.setBookDetail(bookDetail)
    context.closeCheckoutSideMenu()
  }

  const addBookToCart = (event, bookData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, bookData])
    context.openCheckoutSideMenu([...context.cartProducts, bookData])
    context.closeBookDetail()
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg mb-16'
      onClick={() => handleOpenBookDetail(data.data)}
    >
      <figure className='relative mb-5 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 p-1'>
          Categorie {data?.volumeInfo?.categories}
        </span>
        <img
          className='w-full h-full object-fit rounded-lg'
          src={data?.data?.volumeInfo?.imageLinks?.thumbnail}
          alt='book'
        />
        {context.cartProducts.filter((product) => product.id === data?.data?.id)
          .length > 0 ? (
          <div className='absolute top-0 right-0 flex justify-center items-center text-xs bg-white w-6 h-6 rounded-full m-2'>
            <AiOutlineCheck className='h-5 w-5 text-green-600' />
          </div>
        ) : (
          <div
            className='absolute top-0 right-0 flex justify-center items-center text-xs bg-white/80 w-6 h-6 rounded-full m-2'
            onClick={(event) => addBookToCart(event, data?.data)}
          >
            <HiOutlinePlus />
          </div>
        )}
      </figure>
      <p className='flex flex-col'>
        <span className='text-sm font-light'>
          Author: {data?.data?.volumeInfo?.authors}
        </span>
        <span className='text-md font-medium'>
          $ {data?.data?.saleInfo?.listPrice?.amount?.toLocaleString('es-CO')}
        </span>
      </p>
    </div>
  )
}

export default Card
