import React, { useRef, useState } from "react";
import styles from "./productdetails_slider1.module.css";
import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingCart } from "react-icons/fa";

/* ---------- Product Data (dummy) ---------- */
const products1 = [
  { img: "/images/Home/sofa.jpg", title: "Sofa1", desc: "Elegant 3-seater sofa with cushions.", rating: 4.5, reviews: 90, oldPrice: "₹19,999", newPrice: "₹12,999" },
  { img: "/images/Home/sofa.jpg", title: "Bed Sheet2", desc: "High-quality cotton bed sheet.", rating: 4.2, reviews: 75, oldPrice: "₹3,999", newPrice: "₹2,999" },
  { img: "/images/Home/sofa.jpg", title: "Chair3", desc: "Stylish wooden chair.", rating: 4.3, reviews: 110, oldPrice: "₹9,999", newPrice: "₹6,999" },
  { img: "/images/Home/sofa.jpg", title: "Home Sofa4", desc: "Compact home sofa.", rating: 4.0, reviews: 60, oldPrice: "₹18,999", newPrice: "₹12,999" },
  { img: "/images/Home/sofa.jpg", title: "Sofa1", desc: "Elegant 3-seater sofa with cushions.", rating: 4.5, reviews: 90, oldPrice: "₹19,999", newPrice: "₹12,999" },
  { img: "/images/Home/sofa.jpg", title: "Bed Sheet2", desc: "High-quality cotton bed sheet.", rating: 4.2, reviews: 75, oldPrice: "₹3,999", newPrice: "₹2,999" },
  { img: "/images/Home/sofa.jpg", title: "Chair3", desc: "Stylish wooden chair.", rating: 4.3, reviews: 110, oldPrice: "₹9,999", newPrice: "₹6,999" },
  { img: "/images/Home/sofa.jpg", title: "Home Sofa4", desc: "Compact home sofa.", rating: 4.0, reviews: 60, oldPrice: "₹18,999", newPrice: "₹12,999" },
];

const ProductDetailsSlider1 = () => {
  const sliderRef = useRef(null);
  const [page, setPage] = useState(1);
  const [pages] = useState(products1.length);
  const [hearts, setHearts] = useState(() => products1.map(() => false));

  /* ---------- Scroll one full card (with margin) ---------- */
  const scrollByCard = (dir) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(`.${styles.productCard}`);
    if (!card) return;

    // card width + margin
    const cardStyle = window.getComputedStyle(card);
    const cardMargin =
      parseInt(cardStyle.marginLeft) + parseInt(cardStyle.marginRight);
    const cardWidth = card.offsetWidth + cardMargin;

    const currentScroll = sliderRef.current.scrollLeft;
    const newScroll =
      dir === "left" ? currentScroll - cardWidth : currentScroll + cardWidth;

    sliderRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });

    // update page number
    const newPage = Math.min(
      pages,
      Math.max(1, Math.round(newScroll / cardWidth) + 1)
    );
    setPage(newPage);
  };

  /* ---------- Heart toggle ---------- */
  const toggleHeart = (idx) => {
    setHearts((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  return (
    <div className={styles.container}>
      <section className={styles.sliderSection}>
        <div className={styles.sliderHeader}>
          <h3 className={styles.sliderTitle}>Inspired by your browsing history</h3>
          {/* <div className={styles.pageControls}>
            <span className={styles.pageText}>
              Page {page} of {pages}
            </span>
          </div> */}
        </div>

        <div className={styles.sliderWrapper}>
          <button
            className={`${styles.bigArrow} ${styles.left}`}
            onClick={() => scrollByCard("left")}
          >
            <FaChevronLeft />
          </button>

          <div className={styles.slider} ref={sliderRef}>
            {products1.map((p, idx) => (
              <div className={styles.productCard} key={idx}>
                <div className={styles.imgWrap}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className={styles.productImg}
                  />
                  <button
                    className={styles.heartBtn}
                    onClick={() => toggleHeart(idx)}
                  >
                    <FaHeart
                      className={
                        hearts[idx] ? styles.heartActive : styles.heartIcon
                      }
                    />
                  </button>
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.productTitle}>{p.title}</h4>
                  <p className={styles.productDesc}>{p.desc}</p>
                  <div className={styles.productRating}>
                    <span className={styles.stars}>
                      {"★".repeat(Math.floor(p.rating))}
                      {"☆".repeat(5 - Math.floor(p.rating))}
                    </span>
                    <span className={styles.reviews}>
                      ({p.reviews} reviews)
                    </span>
                  </div>
                  <div className={styles.productPrices}>
                    <span className={styles.newPrice}>{p.newPrice}</span>
                    <span className={styles.oldPrice}>{p.oldPrice}</span>
                  </div>
                  <div className={styles.cardActions}>
                    <button className={styles.buyBtn}>Buy Now</button>
                    <button className={styles.cartBtn}>
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`${styles.bigArrow} ${styles.right}`}
            onClick={() => scrollByCard("right")}
          >
            <FaChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsSlider1;
