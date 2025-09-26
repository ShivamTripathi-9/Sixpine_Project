import React, { useRef } from "react";
import "./bannerCards.css";
import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingCart } from "react-icons/fa";

// Banner Data
const bannerCards = [
  {
  //   title: "Bohemian",
  //   text: "Explore Furniture Fused With Rich Textures & Bold Hues Where Wanderlust Meets Home",
    img:"/images/Home/banner.png",
  },
  {
    // title: "Amberville",
    // text: "Explore Handcrafted Pieces Inspired By Colonial Charm, Reimagined For Modern Living",
    img:"/images/Home/banner.png",
  },
  {
    // title: "Amberville",
    // text: "Explore Handcrafted Pieces Inspired By Colonial Charm, Reimagined For Modern Living",
    img:"/images/Home/banner.png",
  },
];

// Slider Product Data
const products1 = [
  {
    img:"/images/Home/sofa1.jpg",
    title: "Sofa",
    desc: "Elegant wooden sofa with soft cushions & premium finish lore",
    rating: 4.5,
    reviews: 200,
    oldPrice: "₹15,999",
    newPrice: "₹12,999",
  },
  {
    img:"/images/Home/sofa2.jpg",
    title: "Bed Sheer",
    desc: "Premium solid wood bed with textured fabric finish",
    rating: 4.2,
    reviews: 75,
    oldPrice: "₹18,999",
    newPrice: "₹13,999",
  },
  {
     img:"/images/Home/sofa3.jpg",
    title: "Chair",
    desc: "Modern wooden chair with ergonomic design for comfort",
    rating: 4.3,
    reviews: 110,
    oldPrice: "₹8,999",
    newPrice: "₹6,999",
  },
  {
    img:"/images/Home/sofa4.jpg",
    title: "Home Sofa",
    desc: "Classic styled sofa perfect for small living rooms",
    rating: 4.0,
    reviews: 95,
    oldPrice: "₹14,999",
    newPrice: "₹10,999",
  },
  {
    img:"/images/Home/sofa4.jpg",
    title: "Home Sofa",
    desc: "Classic styled sofa perfect for small living rooms",
    rating: 4.0,
    reviews: 95,
    oldPrice: "₹14,999",
    newPrice: "₹10,999",
  },
  {
    img:"/images/Home/sofa4.jpg",
    title: "Home Sofa",
    desc: "Classic styled sofa perfect for small living rooms",
    rating: 4.0,
    reviews: 95,
    oldPrice: "₹14,999",
    newPrice: "₹10,999",
  },
];

const products2 = [
  {
     img:"/images/Home/sofa4.jpg",
    title: "Wooden Bed",
    desc: "Solid Sheesham wood bed with classic finishing",
    rating: 4.4,
    reviews: 120,
    oldPrice: "₹16,999",
    newPrice: "₹12,499",
  },
  {
    img:"/images/Home/sofa3.jpg",
    title: "Luxury Sofa",
    desc: "Stylish sofa with modern upholstery for your living room",
    rating: 4.6,
    reviews: 180,
    oldPrice: "₹22,999",
    newPrice: "₹18,999",
  },
  {
  img:"/images/Home/sofa2.jpg",
    title: "Arm Chair",
    desc: "Comfortable arm chair with cushion seating",
    rating: 4.1,
    reviews: 98,
    oldPrice: "₹9,999",
    newPrice: "₹7,499",
  },
  {
  img:"/images/Home/sofa1.jpg",
    title: "Arm Chair",
    desc: "Comfortable arm chair with cushion seating",
    rating: 4.1,
    reviews: 98,
    oldPrice: "₹9,999",
    newPrice: "₹7,499",
  },
  {
  img:"/images/Home/sofa2.jpg",
    title: "Arm Chair",
    desc: "Comfortable arm chair with cushion seating",
    rating: 4.1,
    reviews: 98,
    oldPrice: "₹9,999",
    newPrice: "₹7,499",
  },
  {
  img:"/images/Home/sofa1.jpg",
    title: "Arm Chair",
    desc: "Comfortable arm chair with cushion seating",
    rating: 4.1,
    reviews: 98,
    oldPrice: "₹9,999",
    newPrice: "₹7,499",
  },
];

const Crafted = () => {
  // Refs for sliders
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const scroll = (ref, dir) => {
    ref.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  const renderProducts = (products) =>
    products.map((p, idx) => (
      <div className="crafted-product-card" key={idx}>
        <img src={p.img} alt={p.title} className="product-img1" />
        <h4 className="product-title">{p.title}</h4>
        <p className="product-desc">{p.desc}</p>
        <div className="product-rating">
          {"★".repeat(Math.floor(p.rating))}
          {"☆".repeat(5 - Math.floor(p.rating))}
          <span> ({p.reviews} reviews)</span>
        </div>
        <div className="product-prices">
          <span className="old-price">{p.oldPrice}</span>
          <span className="new-price">{p.newPrice}</span>
        </div>
        <button className="buy-btn">Buy Now</button>
        <div className="product-icons">
          <FaHeart /> <FaShoppingCart />
        </div>
      </div>
    ));

  return (
    <div className="crafted-container">
      {/* Banner Section */}
      <h3 className="crafted-heading">Crafted In India</h3>
      <div className="crafted-banner">
        {bannerCards.map((b, i) => (
          <div className="banner-card" style={{ backgroundImage: `url(${b.img})` }} key={i}>
            <div className="banner-overlay">
              <h4>{b.title}</h4>
              <p>{b.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider 1 */}
      <div className="crafted-slider-section">
        <h3 className="slider-title">Customers Frequently viewed | Popular products in the last 7 days</h3>
        <div className="slider-wrapper">
          <button className="slider-arrow left" onClick={() => scroll(slider1, "left")}>
            <FaChevronLeft />
          </button>
          <div className="crafted-slider" ref={slider1}>
            {renderProducts(products1)}
          </div>
          <button className="slider-arrow right" onClick={() => scroll(slider1, "right")}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Slider 2 */}
      <div className="crafted-slider-section">
        <h3 className="slider-title">Inspired by your browsing history</h3>
        <div className="slider-wrapper">
          <button className="slider-arrow left" onClick={() => scroll(slider2, "left")}>
            <FaChevronLeft />
          </button>
          <div className="crafted-slider" ref={slider2}>
            {renderProducts(products2)}
          </div>
          <button className="slider-arrow right" onClick={() => scroll(slider2, "right")}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Crafted;