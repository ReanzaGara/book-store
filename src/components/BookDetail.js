import React from 'react';
import './App.css';

function BookDetail({book}) {
    if(!book) {
        return <div className='book-detail'>Select a book to see details</div>
    }

    return (
        <div className='book-detail'>
            <h2>{book.title}</h2>
            <h3>by {book.author}</h3>
            <p>Status: {book.outOfStock? "Out of Stock" : "In Stock"}</p>
        </div>
    );
}

export default BookDetail;