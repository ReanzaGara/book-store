import React, {useState} from "react";
import './App.css';

function AddBookForm({onAddBook}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title && author) {
            onAddBook({title, author, outOfStock: false});
            setTitle('');
            setAuthor('');
        }
    };

    return (
        <div className="add-book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBookForm;