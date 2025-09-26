import React, { useState } from "react";
import styles from "./Navigation.module.css"; // ✅ module import

function NavbarMenu() {
  const [activeMenu, setActiveMenu] = useState(null);

  // ✅ Only some items have dropdown
  const menuItems = [
    { title: "Home" }, // ❌ no dropdown
    {
      title: "Trendings",
      dropdown: ["Clothing", "Shoes", "Accessories"],
    },
    {
      title: "Buy Again Continue Shopping",
      dropdown: ["Electronics", "Books", "Home & Kitchen", "Toys"],
    },
    { title: "Best Deals" }, // ❌ no dropdown
    {
      title: "Recently Browsed",
      dropdown: ["Lightning Deals", "Clearance", "Coupons"],
    },
    { title: "By in Bulk" }, // ❌ no dropdown
    { title: "Track Order" }, // ❌ no dropdown
    { title: "Contact Us" }, // ❌ no dropdown
    { title: "Help" }, // ❌ no dropdown
  ];

  return (
    <div className={styles.menuBar}>
      <ul className={styles.menuList}>
        {menuItems.map((menu, index) => {
          const hasDropdown = !!menu.dropdown;

          return (
            <li
              key={index}
              className={styles.menuItem}
              onMouseEnter={() => hasDropdown && setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {menu.title}

              {/* ✅ Arrow only if dropdown exists */}
              {hasDropdown && (
                <span className={styles.arrow}>
                  {activeMenu === index ? "˄" : "˅"}
                </span>
              )}

              {/* ✅ Show dropdown only if exists */}
              {hasDropdown && activeMenu === index && (
                <ul className={styles.dropdown}>
                  {menu.dropdown.map((subItem, i) => (
                    <li key={i}>{subItem}</li>
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
