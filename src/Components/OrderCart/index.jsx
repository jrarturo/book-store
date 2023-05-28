import { HiOutlineX } from 'react-icons/hi'

const OrderCart = (props) => {
  const { id, title, imgUrl, price, currency, handleDeleteBook } = props

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={imgUrl}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'> {title} </p>
      </div>
      {handleDeleteBook && (
        <div className='flex items-center gap-2'>
          <p className='text-lg font-medium'> ${price} </p> <p> {currency} </p>
          <HiOutlineX
            className='cursor-pointer'
            onClick={() => handleDeleteBook(id)}
          />
        </div>
      )}
    </div>
  )
}

export default OrderCart
