import React, { useRef } from "react";
import styles from "./furnitureOfferSections.module.css";

const sections = [
  {
    id: 1,
    title: "Up to 60% Off | Furniture crafted for every corner",
    link: "See all offers",
    products: [
      "/images/Home/sofa.jpg",
      "/images/Home/bed.jpg",
      "/images/Home/bedroom.jpg",
      "/images/Home/chair.jpg",
      "/images/Home/sofa.jpg",
      "/images/Home/sofa2.jpg",
      "/images/Home/sofa3.jpg",
    ],
  },
  {
    id: 2,
    title: "Sofa for living room",
    link: "See more",
    products: [
      "/images/Home/sofa1.jpg",
      "/images/Home/sofa2.jpg",
      "/images/Home/sofa3.jpg",
      "/images/Home/sofa4.jpg",
      "/images/Home/bed.jpg",
      "/images/Home/chair.jpg",
       "/images/Home/sofa1.jpg",
      "/images/Home/sofa2.jpg",
      "/images/Home/sofa3.jpg",
      "/images/Home/sofa4.jpg",
    ],
  },
  {
    id: 3,
    title: "Related to items you've viewed",
    link: "See more",
    products: [
       "/images/Home/sofa1.jpg",
      "/images/Home/sofa2.jpg",
      "/images/Home/sofa3.jpg",
      "/images/Home/sofa4.jpg",
      "/images/Home/bed.jpg",
      "/images/Home/chair.jpg",
       "/images/Home/sofa1.jpg",
      "/images/Home/sofa2.jpg",
      "/images/Home/sofa3.jpg",
      "/images/Home/sofa4.jpg",
    ],
  },
];

const FurnitureOfferSections = () => {
  const sliderRefs = useRef([]);

  const scroll = (index, direction) => {
    const slider = sliderRefs.current[index];
    if (slider) {
      const scrollAmount = 250; // scroll by 1 card width
      slider.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.offercontainer}>
      {sections.map((section, index) => (
        <div key={section.id} className={styles.section}>
          {/* Header */}
          <div className={styles.sectionHeader}>
            <h2>{section.title}</h2>
            <a href="/">{section.link}</a>
          </div>

          {/* Slider Wrapper */}
          <div className={styles.sliderWrapper}>
            {/* Left Button */}
            <button
              className={`${styles.navBtn} ${styles.leftBtn}`}
              onClick={() => scroll(index, "left")}
            >
              ❮
            </button>

            {/* Scrollable Product List */}
            <div
              className={styles.slider}
              ref={(el) => (sliderRefs.current[index] = el)}
            >
              {section.products.map((img, i) => (
                <div key={i} className={styles.card}>
                  <img src={img} alt={`Product ${i + 1}`} />
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              className={`${styles.navBtn} ${styles.rightBtn}`}
              onClick={() => scroll(index, "right")}
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FurnitureOfferSections;
