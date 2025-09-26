import React, { useState } from "react";
import "./Navigationdown.css";

function NavbarMenudown() {
  const [activeMenu, setActiveMenu] = useState(null);

  // Menu with dropdown data
  const menuItems = [
    {
      title: "All",
      dropdown: ["Profile", "Orders", "Wishlist"],
    },
    {
      title: "Sofa & Couches",
      dropdown: ["Clothing", "Shoes", "Accessories"],
    },
    {
      title: "Sofa & Chairs",
      dropdown: ["Electronics", "Books", "Home & Kitchen", "Toys"],
    },
    {
      title: "Rocking Chairs",
      dropdown: ["Recently Viewed", "Recommended"],
    },
    {
      title: "Ottomans",
      dropdown: ["Lightning Deals", "Clearance", "Coupons"],
    },
    {
      title: "Beds & Sofa Cum Beds",
      dropdown: ["Best Sellers", "Free E-books", "Kindle"],
    },
    {
      title: "Luxury",
      dropdown: ["Groceries", "Household Items"],
    },
     
  ];

  return (
    <div className="menu-bardown">
      <ul className="menu-list">
        {menuItems.map((menu, index) => (
          <li
            key={index}
            className="menu-item"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {menu.title}{" "}
            <span className="arrow">
              {activeMenu === index ? "˄" : "˅"} {/* reverse icon */}
            </span>

            {/* Dropdown */}
            {activeMenu === index && (
              <ul className="dropdown">
                {menu.dropdown.map((subItem, i) => (
                  <li key={i}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarMenudown;
