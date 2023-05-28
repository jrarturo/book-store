import { useContext } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrderCart from '../../Components/OrderCart'
import { BookShopContext } from '../../Context'

const MyOrder = () => {
  const context = useContext(BookShopContext)

  return (
    <Layout>
      <div className='flex w-80 justify-center items-center relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <MdArrowBackIos />
        </Link>

        <h1>My order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {context.orderCart?.slice(-1)[0].books.map((product) => (
          <OrderCart
            id={product.id}
            key={product.id}
            title={product.volumeInfo.title}
            imgUrl={product.volumeInfo.imageLinks.smallThumbnail}
            price={product.saleInfo?.listPrice.amount.toLocaleString('es-CO')}
            currency={product.saleInfo?.listPrice.currencyCode}
          />
        ))}
      </div>
    </Layout>
  )
}

export default MyOrder
