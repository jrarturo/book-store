import { useContext } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { BookShopContext } from '../../Context'
const BookDetail = () => {
  const context = useContext(BookShopContext)
  return (
    <aside
      className={`${
        context.isBookDetailOpen ? 'flex' : 'hidden'
      } w-[360px] h-[calc(100vh-70px)] flex-col fixed right-0 border border-blue-400 rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button
          className='text-xl font-bold pointer'
          onClick={() => context.closeBookDetail()}
        >
          <HiOutlineX />
        </button>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={context.bookDetail.volumeInfo.imageLinks.thumbnail}
          alt={context.bookDetail.volumeInfo.title}
        />
      </figure>
      <p className='flex flex-col p-6 font-semibold'>
        Title:
        <span className='font-medium text-2xl'>
          {context.bookDetail.volumeInfo.title}
        </span>
        Author:
        <span className='font-medium text-md'>
          {context.bookDetail.volumeInfo.authors}
        </span>
        No. Pages:
        <span className='font-light text-sm'>
          {context.bookDetail.volumeInfo.pageCount}
        </span>
      </p>
    </aside>
  )
}

export default BookDetail
