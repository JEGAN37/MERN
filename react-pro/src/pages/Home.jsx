import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="home-container">
      <h1>Shopify Discussions</h1>
      <h2>All things Shopify and commerce</h2>

      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search the community..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;