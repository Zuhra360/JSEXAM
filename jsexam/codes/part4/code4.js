const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281, genre: 'Fiction' },
    { title: '1984', author: 'George Orwell', pages: 328, genre: 'Dystopian' },
    { title: 'Moby Dick', author: 'Herman Melville', pages: 720, genre: 'Adventure' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180, genre: 'Classic' },
    { title: 'War and Peace', author: 'Leo Tolstoy', pages: 1225, genre: 'Historical' },
]
//1
for(let x in books){
    console.log(books[x].title);
}
//2
let maxPagesBook = books[0];
for (let i = 1; i < books.length; i++) {
  if (books[i].pages > maxPagesBook.pages) {
    maxPagesBook = books[i];
  }
}
//3
function totalPages(total, book) {
  return total + book.pages;
}
const totalPagesSum = books.reduce(totalPages, 0);
console.log('Total number of pages:', totalPagesSum);

//4

const genreFind = 'Fiction';
const booksInGenre = [];
for (let book of books) {
  if (book.genre === genreFind) {
    booksInGenre.push(book);
  }
}
console.log(`Books in the genre '${genreFind}':`, booksInGenre);

//5
const authorCount = {};
for (let book of books) {
  if (!authorCount[book.author]) {
    authorCount[book.author] = 0;
  }
  authorCount[book.author]++;
}
const authorsMoreThanOneBook = [];
for (let author in authorCount) {
  if (authorCount[author] > 1) {
    authorsMoreThanOneBook.push(author);
  }
}
console.log('Authors who have written more than one book:', authorsMoreThanOneBook);


// 6
const sortedByPages = [...books];
sortedByPages.sort((a, b) => b.pages - a.pages);
console.log('Books sorted by number of pages :', sortedByPages);

// 7
let minPagesBook = books[0];
for (let book of books) {
  if (book.pages < minPagesBook.pages) {
    minPagesBook = book;
  }
}
console.log('Book with the smallest number of pages:', minPagesBook);

// 8
let longestTitleBook = books[0];
for (let book of books) {
  if (book.title.length > longestTitleBook.title.length) {
    longestTitleBook = book;
  }
}
console.log('Book with the longest title:', longestTitleBook);

// 9
let shortestTitleBook = books[0];
for (let book of books) {
  if (book.title.length < shortestTitleBook.title.length) {
    shortestTitleBook = book;
  }
}
console.log('Book with the shortest title:', shortestTitleBook);

// 10
function totalPages(total, book) {
  return total + book.pages;
}
const averagePages = totalPages / books.length;
console.log('Average number of pages:', averagePages);


