import React from 'react';
import './Search.css'; // Make sure to create this CSS file

function SearchPage() {
    return (
        <div className="search-page">
            <div className="search-container">
                <h1>Find What You Need</h1>
                <textarea placeholder="Search..." className="search-input"></textarea>
                <button>Search</button>
            </div>
        </div>
    );
}

export default SearchPage;
