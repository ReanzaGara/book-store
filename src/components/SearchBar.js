import React from "react";
import './App.css';

function SearchBar({onSearch}) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a book..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;