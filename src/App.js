import React, {useState, useEffect} from 'react';
import './App.css';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import AddBookForm from './components/AddBookForm';

function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(data => setBooks(data));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const addBook = (newBook) => {
    fetch("http://localhost:3000/books", {
      method: "POST",
      header: {
        "Content-Type": "Application/Json"
      },
      bodu: JSON.stringify(newBook),
    })
    .then(response => response.json())
    .then(data => setBooks([...books, data]));
  };

  const deleteBook = (id) => {
    fetch(`http://localhost:3000/books/${id}`, {method: "DELETE"})
    .then(() => setBooks(books.filter(book => book.id !== id)));
  };

  const toggleOutOfStock = (id) => {
    setBooks(books.map(book => book.id === id ? {...books, outOfStock: !book.outOfStock}: book));
  };

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className='App'>
      <hi>BookStore</hi>
      <SearchBar onSearch={handleSearch} />
      <AddBookForm onAddBook={addBook} />
      <BookList books={filteredBooks} onDelete={deleteBook} onToggleOutOfStock={toggleOutOfStock} />
    </div>
  );
}

export default App;