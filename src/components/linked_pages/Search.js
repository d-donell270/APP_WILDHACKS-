// SearchPage.js
import React from 'react';
import Navbar from '../Navbar';
import './Search.css'; // Make sure to create this CSS file

function SearchPage() {
    return (
        <>
            <Navbar />
            <div className="search-page">
                <div className="search-container">
                    <h1>Find What You Need</h1>
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
            </div>
        </>
    );
}

export default SearchPage;
