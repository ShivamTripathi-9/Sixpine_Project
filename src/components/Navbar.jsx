import React, { useState } from 'react';
import { MapPin, Search, User, Package, ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";

import "./Navbar.css";

const SixpineHeader = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="sixpine-header">
      {/* Main Header */}
      <div className="main-header">
        {/* Logo and Location */}
        <div className="logo-location-section">
          <div className="logo">
            SIXPINE
          </div>
          
          <div className="location-selector">
            <MapPin className="location-icon" />
            <span className="location-text">110001</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <div className="search-container">
            {/* Category Dropdown */}
            <div className="category-dropdown-container">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-dropdown"
              >
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
                <option>Home & Garden</option>
                <option>Sports</option>
              </select>
            </div>
            
            {/* Search Input with Button */}
            <div className="search-input-container">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Click to search..."
                className="search-input"
              />
              
              {/* Search Button */}
              <button className="search-button">
                <Search className="search-icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Options */}
        <div className="right-options">
          {/* Account */}
         <div className="option-item">
      <User className="option-icon" />
      <Link
        to="/login"
        className={`option-text ${location.pathname === "/login" ? "active" : ""}`}
      >
        Account
      </Link>
    </div>
          
          {/* Returns & Orders */}
          <div className="option-item">
            <Package className="option-icon" />
            <span className="option-text">Returns & Orders</span>
          </div>
          
          {/* Cart */}
          <div className="option-item cart-container">
            <div className="cart-icon-container">
              <ShoppingCart className="option-icon" />
              <span className="cart-badge">
                1
              </span>
            </div>
            <span className="option-text">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixpineHeader;