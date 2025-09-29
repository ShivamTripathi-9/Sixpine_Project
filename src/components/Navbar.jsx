import React, { useState } from 'react';
import { MapPin, Search, User, Package, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from "react-router-dom"; // Import useLocation

import styles from "./Navbar.module.css"; // Import the CSS module

const SixpineHeader = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation(); 

  return (
    <div className={styles.sixpineHeader}>
      {/* Main Header */}
      <div className={styles.mainHeader}>
        {/* Logo and Location */}
        <div className={styles.logoLocationSection}>
          <div className={styles.logo}>
            SIXPINE
          </div>
          
          <div className={styles.locationSelector}>
            <MapPin className={styles.locationIcon} />
            <span className={styles.locationText}>110001</span>
          </div>
        </div>

        {/* Search Section */}
        <div className={styles.searchSection}>
          <div className={styles.searchContainer}>
            {/* Category Dropdown */}
            <div className={styles.categoryDropdownContainer}>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.categoryDropdown}
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
            <div className={styles.searchInputContainer}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Click to search..."
                className={styles.searchInput}
              />
              
              {/* Search Button */}
              <button className={styles.searchButton}>
                <Search className={styles.searchIcon} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Options */}
        <div className={styles.rightOptions}>
          {/* Account */}
         <div className={styles.optionItem}>

            <Link to="/login" className={styles.linkIcon}>
  <User className={styles.optionIcon} color="#fff" />
</Link>

            <Link
                to="/login"
                className={`${styles.optionText} ${location.pathname === "/login" ? styles.active : ""}`}
            >
                Account
            </Link>
          </div>
          
          {/* Returns & Orders */}
          <div className={styles.optionItem}>
            <Package className={styles.optionIcon} />
            <span className={styles.optionText}>Returns & Orders</span>
          </div>
          
          {/* Cart */}
          <div className={`${styles.optionItem} ${styles.cartContainer}`}>
            <div className={styles.cartIconContainer}>
              <ShoppingCart className={styles.optionIcon} />
              <span className={styles.cartBadge}>
                1
              </span>
            </div>
            <span className={styles.optionText}>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixpineHeader;