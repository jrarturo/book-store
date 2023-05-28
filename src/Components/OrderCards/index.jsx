const OrderCards = (props) => {
  const { totalBooks, totalPrice } = props

  return (
    <div className='flex justify-between items-center mb-3 border border-blue-900'>
      <p>
        <span>{Date}</span>
        <span>{totalBooks}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  )
}

export default OrderCards
