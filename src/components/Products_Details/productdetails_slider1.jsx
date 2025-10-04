import React, { useRef, useState, useEffect } from "react";
import styles from "./productdetails_slider1.module.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

// Product Data
const products1 = [
  {
    img: "/images/Home/sofaproduct.jpg",
    title: "Elegant Sofa",
    desc: "Elegant wooden sofa with soft cushions & premium finish",
    rating: 4.5,
    reviews: 200,
    oldPrice: "₹15,999",
    newPrice: "₹12,999",
  },
  {
    img: "/images/Home/bed copy.jpg",
    title: "Modern Bed",
    desc: "Premium solid wood bed with textured fabric finish",
    rating: 4.2,
    reviews: 75,
    oldPrice: "₹18,999",
    newPrice: "₹13,999",
  },
  {
    img: "/images/Home/chair copy.jpg",
    title: "Comfort Chair",
    desc: "Modern wooden chair with ergonomic design for comfort",
    rating: 4.3,
    reviews: 110,
    oldPrice: "₹8,999",
    newPrice: "₹6,999",
  },
  {
    img: "/images/Home/sofa4.jpg",
    title: "Living Sofa",
    desc: "Classic styled sofa perfect for small living rooms",
    rating: 4.0,
    reviews: 95,
    oldPrice: "₹14,999",
    newPrice: "₹10,999",
  },
  {
    img: "/images/Home/sofa1.jpg",
    title: "Designer Sofa",
    desc: "Sophisticated design with plush seating and durable frame",
    rating: 4.7,
    reviews: 250,
    oldPrice: "₹17,999",
    newPrice: "₹14,999",
  },
  {
    img: "/images/Home/sofa2.jpg",
    title: "Bedroom Set",
    desc: "Complete bedroom solution with bed and side tables",
    rating: 4.3,
    reviews: 150,
    oldPrice: "₹25,999",
    newPrice: "₹19,999",
  },
];

const Crafted = () => {
  const slider1 = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hearts, setHearts] = useState(() => products1.map(() => false));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (ref, dir) => {
    if (ref.current) {
      const scrollAmount = isMobile ? ref.current.offsetWidth : 300;
      ref.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const toggleHeart = (idx) => {
    setHearts((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const renderProducts = (products) =>
    products.map((p, idx) => (
      <div className={styles.craftedProductCard} key={idx}>
        <div className={styles.imageWrapper}>
          <img src={p.img} alt={p.title} className={styles.productImg1} />
          {/* ❤️ Heart Icon */}
          <FaHeart
            className={`${styles.heartIcon} ${
              hearts[idx] ? styles.heartActive : ""
            }`}
            onClick={() => toggleHeart(idx)}
          />
        </div>

        <h4 className={styles.productTitle}>{p.title}</h4>
        <p className={styles.productDesc}>{p.desc}</p>

        <div className={styles.productRating}>
          {"★".repeat(Math.floor(p.rating))}
          {"☆".repeat(5 - Math.floor(p.rating))}
          <span> ({p.reviews} reviews)</span>
        </div>

        <div className={styles.productPrices}>
          
          <span className={styles.newPrice}>{p.newPrice}</span>
          <span className={styles.oldPrice}>{p.oldPrice}</span>
        </div>

        <div className={styles.actionRow}>
          <button className={styles.buyBtn}>Buy Now</button>
          <div className={styles.productIcons}>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    ));

  return (
    <div className={styles.craftedContainer}>
      <div className={styles.craftedSliderSection}>
        <h3 className={styles.sliderTitle}>Inspired by your browsing history</h3>
        <div className={styles.sliderWrapper}>
          <button
            className={`${styles.sliderArrow} ${styles.left}`}
            onClick={() => scroll(slider1, "left")}
          >
            <FaChevronLeft />
          </button>
          <div className={styles.craftedSlider} ref={slider1}>
            {renderProducts(products1)}
          </div>
          <button
            className={`${styles.sliderArrow} ${styles.right}`}
            onClick={() => scroll(slider1, "right")}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Crafted;
