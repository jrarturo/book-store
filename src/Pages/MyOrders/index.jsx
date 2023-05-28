import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrderCards from '../../Components/OrderCards'
import { BookShopContext } from '../../Context'

const MyOrders = () => {
  const context = useContext(BookShopContext)
  console.log(context.orderCart)

  return (
    <Layout>
      <div>
        <h1>My orders</h1>
      </div>
      {context.orderCart.map((order, index) => (
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrderCards
            key={order.id}
            totalBooks={order.totalBooks}
            totalPrice={order.totalPrice}
          />
        </Link>
      ))}
    </Layout>
  )
}

export default MyOrders
