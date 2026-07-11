// Object Distructuring
const Book = {
  name: '48 Laws of Power',
  pages: 800,
  color: 'red and blue',
  author: 'Robert Greene',
  price: 500,
}
const { name, pages, color, author, price } = Book
console.log(name)
console.log(pages)
console.log(color)
console.log(price)


// Array Distructuring
const colors = ['red', 'green', 'pink', 'blue']
// let col1 = colors[0]
// let col2 = colors[1]
// let col3 = colors[2]
// let col4 = colors[3]

const [col1, col2, col3, col4] = colors

console.log(col1)