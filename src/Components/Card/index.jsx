const Card = () => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-3 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 p-1'>
          Categorie
        </span>
        <img
          className='w-full h-full object-fit rounded-lg'
          src='https://m.media-amazon.com/images/I/519OoDZ59fL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
          alt='book'
        />
        <div className='absolute top-0 right-0 flex justify-center items-center text-xs bg-white/80 w-6 h-6 rounded-full m-2'>
          ➕
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>Book</span>
        <span className='text-lg font-medium'>$0.00</span>
      </p>
    </div>
  )
}

export default Card
