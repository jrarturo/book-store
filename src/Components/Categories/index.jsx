import { useEffect, useState } from 'react'
import Layout from '../Layout'

const Categories = () => {
  const API_KEY = 'AIzaSyAKO_6L3sXSGn5H4NbsWss8w4Ym6kHmXug'

  const [categories, setCategories] = useState([])
  console.log('CATEGORIES>>> ', categories)

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=javascript&key=${API_KEY}&langRestrict=es`
    )
      .then((response) => response.json())
      .then((data) => setCategories(data.items))
  }, [])

  return (
    <Layout>
      <div> Categories </div>
    </Layout>
  )
}

export default Categories
