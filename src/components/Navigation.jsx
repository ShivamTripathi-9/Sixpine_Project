import React, { useState, useEffect, useRef } from "react";
import styles from "./Navigation.module.css";

function NavbarMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const menuBarRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      // Define your mobile breakpoint, e.g., 1023px
      setIsMobile(window.innerWidth <= 1023);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Listen for resize

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll event to close dropdown
  useEffect(() => {
    const menuBar = menuBarRef.current;
    
    const handleScroll = () => {
      if (activeMenu !== null) {
        setActiveMenu(null); // Close dropdown on scroll
      }
    };

    // Add scroll listener only for mobile screens
    if (menuBar && isMobile) {
      menuBar.addEventListener('scroll', handleScroll);
    }

    // Cleanup
    return () => {
      if (menuBar) {
        menuBar.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeMenu, isMobile]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuBarRef.current && !menuBarRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    // Add click outside listener only for mobile
    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside); // For touch devices
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile]);

  // Function to toggle dropdown on click for mobile
  const handleItemClick = (index) => {
    if (isMobile) {
      setActiveMenu(activeMenu === index ? null : index);
    }
  };

  // Function for hover on desktop
  const handleMouseEnter = (index, hasDropdown) => {
    if (!isMobile && hasDropdown) {
      setActiveMenu(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveMenu(null);
    }
  };

  const menuItems = [
    { title: "Home" },
    {
      title: "Trendings"
      // dropdown: ["Clothing", "Shoes", "Accessories"],
    },
   
    { title: "Buy Again" },
    {
      title: "Continue Shopping"
      // dropdown: ["Lightning Deals", "Clearance", "Coupons"],
    },
    { title: "Best Deals" },
    { title: "Recently Browsed" },
    { title: "Buy in Bulk" },
    { title: "Track Order" },
    { title: "Contact Us" },
    { title: "Help" },
  ];

  return (
    <div 
      ref={menuBarRef}
      className={styles.menuBar}
    >
      <ul className={styles.menuList}>
        {menuItems.map((menu, index) => {
          const hasDropdown = !!menu.dropdown;
          const isActive = activeMenu === index;

          return (
            <li
              key={index}
              className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
              onMouseEnter={() => handleMouseEnter(index, hasDropdown)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemClick(index)} // Handle click for all items
            >
              {menu.title}

              {hasDropdown && (
                <span className={styles.arrow}>
                  {isActive ? "˄" : "˅"}
                </span>
              )}

              {/* Show dropdown only if it exists and is active */}
              {hasDropdown && isActive && (
                <ul className={styles.dropdown}>
                  {menu.dropdown.map((subItem, i) => (
                    <li 
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent menu item click
                        console.log(`Selected: ${subItem}`);
                        setActiveMenu(null); // Close dropdown after selection
                      }}
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavbarMenu;