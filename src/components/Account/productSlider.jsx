import React, { useRef, useState, useEffect } from "react";
import styles from "./productslider.module.css";
import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingCart } from "react-icons/fa";

/* ---------- Product Data (dummy) ---------- */
const products1 = [
  { img: "/images/Home/sofa.jpg", title: "Sofa1", desc: "Elegant 3-seater sofa with cushions.", rating: 4.5, reviews: 90, oldPrice: "₹19,999", newPrice: "₹12,999" },
  { img: "/images/Home/sofa.jpg", title: "Bed Sheet2", desc: "High-quality cotton bed sheet.", rating: 4.2, reviews: 75, oldPrice: "₹3,999", newPrice: "₹2,999" },
  { img: "/images/Home/sofa.jpg", title: "Chair3", desc: "Stylish wooden chair.", rating: 4.3, reviews: 110, oldPrice: "₹9,999", newPrice: "₹6,999" },
  { img: "/images/Home/sofa.jpg", title: "Home Sofa4", desc: "Compact home sofa.", rating: 4.0, reviews: 60, oldPrice: "₹18,999", newPrice: "₹12,999" },
  { img: "/images/Home/sofa.jpg", title: "Sofa5", desc: "Elegant 3-seater sofa.", rating: 4.5, reviews: 90, oldPrice: "₹19,999", newPrice: "₹12,999" },
  { img: "/images/Home/sofa.jpg", title: "Bed Sheet6", desc: "High-quality cotton bed sheet.", rating: 4.2, reviews: 75, oldPrice: "₹3,999", newPrice: "₹2,999" },
  { img: "/images/Home/sofa.jpg", title: "Sofa7", desc: "Elegant 3-seater sofa with cushions.", rating: 4.5, reviews: 90, oldPrice: "₹19,999", newPrice: "₹12,999" },
  { img: "/images/Home/sofa.jpg", title: "Bed Sheet8", desc: "High-quality cotton bed sheet.", rating: 4.2, reviews: 75, oldPrice: "₹3,999", newPrice: "₹2,999" },
  { img: "/images/Home/sofa.jpg", title: "Chair9", desc: "Stylish wooden chair.", rating: 4.3, reviews: 110, oldPrice: "₹9,999", newPrice: "₹6,999" },
  { img: "/images/Home/sofa.jpg", title: "Home Sofa10", desc: "Compact home sofa.", rating: 4.0, reviews: 60, oldPrice: "₹18,999", newPrice: "₹12,999" },
  { img: "/images/Home/sofa.jpg", title: "Sofa11", desc: "Elegant 3-seater sofa.", rating: 4.5, reviews: 90, oldPrice: "₹19,999", newPrice: "₹12,999" },
];

const products2 = [
  { img: "/images/Home/sofa1.jpg", title: "Bed", desc: "Comfortable wooden bed.", rating: 4.4, reviews: 120, oldPrice: "₹20,999", newPrice: "₹15,999" },
  { img: "/images/Home/sofa2.jpg", title: "Sofa", desc: "Designer 3-seater sofa.", rating: 4.5, reviews: 100, oldPrice: "₹19,999", newPrice: "₹12,999" },
  { img: "/images/Home/sofa3.jpg", title: "Bed Sheet", desc: "Breathable cotton bed sheet.", rating: 4.1, reviews: 85, oldPrice: "₹3,999", newPrice: "₹2,499" },
  { img: "/images/Home/sofa4.jpg", title: "Chair", desc: "Stylish chair for office.", rating: 4.3, reviews: 110, oldPrice: "₹9,999", newPrice: "₹6,999" },
   { img: "/images/Home/sofa.jpg", title: "Sofa7", desc: "Elegant 3-seater sofa with cushions.", rating: 4.5, reviews: 90, oldPrice: "₹19,999", newPrice: "₹12,999" },
  { img: "/images/Home/sofa.jpg", title: "Bed Sheet8", desc: "High-quality cotton bed sheet.", rating: 4.2, reviews: 75, oldPrice: "₹3,999", newPrice: "₹2,999" },
  { img: "/images/Home/sofa.jpg", title: "Chair9", desc: "Stylish wooden chair.", rating: 4.3, reviews: 110, oldPrice: "₹9,999", newPrice: "₹6,999" },
  { img: "/images/Home/sofa.jpg", title: "Home Sofa10", desc: "Compact home sofa.", rating: 4.0, reviews: 60, oldPrice: "₹18,999", newPrice: "₹12,999" },
  { img: "/images/Home/sofa.jpg", title: "Sofa11", desc: "Elegant 3-seater sofa.", rating: 4.5, reviews: 90, oldPrice: "₹19,999", newPrice: "₹12,999" },
];

const ProductSlider = () => {
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  const [page1, setPage1] = useState(1);
  const [pages1, setPages1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [pages2, setPages2] = useState(1);

  const [hearts1, setHearts1] = useState(() => products1.map(() => false));
  const [hearts2, setHearts2] = useState(() => products2.map(() => false));

  useEffect(() => {
    const update = () => {
      if (slider1Ref.current) {
        const card = slider1Ref.current.querySelector(`.${styles.productCard}`);
        if (card) {
          const total1 = Math.ceil(slider1Ref.current.scrollWidth / card.offsetWidth);
          setPages1(total1);
        }
      }
      if (slider2Ref.current) {
        const card = slider2Ref.current.querySelector(`.${styles.productCard}`);
        if (card) {
          const total2 = Math.ceil(slider2Ref.current.scrollWidth / card.offsetWidth);
          setPages2(total2);
        }
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---------- Scroll by 1 card ---------- */
  const scrollByCard = (ref, page, setPage, total, dir) => {
    if (!ref.current) return;

    const card = ref.current.querySelector(`.${styles.productCard}`);
    if (!card) return;

    const cardWidth = card.offsetWidth + 16; // 16px = margin-right/gap
    const currentScroll = ref.current.scrollLeft;

    const newScroll =
      dir === "left"
        ? currentScroll - cardWidth
        : currentScroll + cardWidth;

    ref.current.scrollTo({
      left: newScroll,
      behavior: "auto", // 👈 direct jump (no smooth scroll)
    });

    const newPage = Math.min(total, Math.max(1, Math.round(newScroll / cardWidth) + 1));
    setPage(newPage);
  };

  const toggleHeart = (which, idx) => {
    if (which === 1) {
      setHearts1(prev => {
        const copy = [...prev];
        copy[idx] = !copy[idx];
        return copy;
      });
    } else {
      setHearts2(prev => {
        const copy = [...prev];
        copy[idx] = !copy[idx];
        return copy;
      });
    }
  };

  const renderProducts = (products, hearts, toggleFn) =>
    products.map((p, idx) => (
      <div className={styles.productCard} key={idx}>
        <div className={styles.imgWrap}>
          <img src={p.img} alt={p.title} className={styles.productImg} />
          <button
            className={styles.heartBtn}
            onClick={() => toggleFn(idx)}
            aria-label={hearts[idx] ? "Remove from wishlist" : "Add to wishlist"}
            type="button"
          >
            <FaHeart className={hearts[idx] ? styles.heartActive : styles.heartIcon} />
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
            <span className={styles.reviews}> ({p.reviews} reviews)</span>
          </div>
          <div className={styles.productPrices}>
            <span className={styles.newPrice}>{p.newPrice}</span>
            <span className={styles.oldPrice}>{p.oldPrice}</span>
          </div>
          <div className={styles.cardActions}>
            <button className={styles.buyBtn}>Buy Now</button>
            <button className={styles.cartBtn} aria-label="Add to cart">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className={styles.container}>
      {/* Slider 1 */}
      <section className={styles.sliderSection}>
        <div className={styles.sliderHeader}>
          <h3 className={styles.sliderTitle}>Customers Frequently viewed | Popular products</h3>
          <div className={styles.pageControls}>
            <span className={styles.pageText}>Page {page1} of {pages1}</span>
          </div>
        </div>
        <div className={styles.sliderWrapper}>
          <button className={`${styles.bigArrow} ${styles.left}`}
            onClick={() => scrollByCard(slider1Ref, page1, setPage1, pages1, "left")}>
            <FaChevronLeft />
          </button>
          <div className={styles.slider} ref={slider1Ref}>
            {renderProducts(products1, hearts1, i => toggleHeart(1, i))}
          </div>
          <button className={`${styles.bigArrow} ${styles.right}`}
            onClick={() => scrollByCard(slider1Ref, page1, setPage1, pages1, "right")}>
            <FaChevronRight />
          </button>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Slider 2 */}
      <section className={styles.sliderSection}>
        <div className={styles.sliderHeader}>
          <h3 className={styles.sliderTitle}>Inspired by your browsing history</h3>
          <div className={styles.pageControls}>
            <span className={styles.pageText}>Page {page2} of {pages2}</span>
          </div>
        </div>
        <div className={styles.sliderWrapper}>
          <button className={`${styles.bigArrow} ${styles.left}`}
            onClick={() => scrollByCard(slider2Ref, page2, setPage2, pages2, "left")}>
            <FaChevronLeft />
          </button>
          <div className={styles.slider} ref={slider2Ref}>
            {renderProducts(products2, hearts2, i => toggleHeart(2, i))}
          </div>
          <button className={`${styles.bigArrow} ${styles.right}`}
            onClick={() => scrollByCard(slider2Ref, page2, setPage2, pages2, "right")}>
            <FaChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductSlider;
