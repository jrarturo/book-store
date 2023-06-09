import { useEffect, useState } from 'react'
import BookDetail from '../../Components/BookDetail'
import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import '../App/App.css'

const API_KEY = 'AIzaSyAKO_6L3sXSGn5H4NbsWss8w4Ym6kHmXug'

function Home() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=harry+potter&filter=paid-ebooks&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setBooks(data.items))
  }, [])

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg '>
        {books?.map((book) => (
          <Card key={book.id} data={book} />
        ))}
      </div>
      <BookDetail />
    </Layout>
  )
}

export default Home
