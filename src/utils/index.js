// Desc: calculateTotalPrice function to calculate the total price of the books
// params: books array
// Return: total price of the books
export const calculateTotalPrice = (books) => {
  return books.reduce((acc, book) => acc + book.saleInfo?.listPrice.amount, 0)
}
