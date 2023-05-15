const Card = (data) => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg mb-8'>
      <figure className='relative mb-5 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 p-1'>
          Categorie {data?.volumeInfo?.categories}
        </span>
        <img
          className='w-full h-full object-fit rounded-lg'
          src={data?.data?.volumeInfo?.imageLinks?.thumbnail}
          alt='book'
        />
        <div className='absolute top-0 right-0 flex justify-center items-center text-xs bg-white/80 w-6 h-6 rounded-full m-2'>
          ➕
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>
          Author: {data?.data?.volumeInfo?.authors}
        </span>
        <span className='text-lg font-medium'>$3.00</span>
      </p>
    </div>
  )
}

export default Card
