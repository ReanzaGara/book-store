import React from 'react';
import './App.css';

function BookList({books, onDelete, onToggleOutOfStock}) {
    return (
        <div className='book-list'>
            <h2>Available Books</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id} className={book.outOfStock ? "out-of-stock": ""}>
                        <span>{book.title} by {book.author}</span>
                        <button onClick={() => onToggleOutOfStock(book.id)}>
                            {book.outOfStock ? "Restock" : "Out of Stock"}
                        </button>
                        <button onClick={() => onDelete(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;