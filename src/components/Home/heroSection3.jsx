import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./heroSection3.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection3 = () => {
  const topCards = [
    { name: "Floor Lamps", img: "/images/Home/FloorLamps.jpg" },
    { name: "Hanging Lights", img: "/images/Home/HangingLights.jpg" },
    { name: "Home Temple", img: "/images/Home/HomeTemple.webp" },
    { name: "Serving Trays", img: "/images/Home/HomeTemple.webp" },
    { name: "Wall Decor", img: "/images/Home/FloorLamps.jpg" },
    { name: "Kitchen Racks", img: "/images/Home/FloorLamps.jpg" },
    { name: "Chopping Board", img: "/images/Home/HomeTemple.webp" },
    { name: "Artificial Plants", img: "/images/Home/FloorLamps.jpg" },
  ];

  const sliderCards = [
    {
      tag: "UPTO 45% OFF",
      title: "TV UNIT",
      desc: "Built to Hold the Drama",
      price: "₹1,699",
      img: "/images/Home/FloorLamps.jpg",
    },
    {
      tag: "UPTO 50% OFF",
      title: "OFFICE CHAIR",
      desc: "Breathe Easy, Work Even Harder",
      price: "₹3,989",
      img: "/images/Home/HomeTemple.webp",
    },
    {
      tag: "UPTO 40% OFF",
      title: "HOME TEMPLE",
      desc: "Aesthetic, Not Just Auspicious",
      price: "₹3,000",
      img: "/images/Home/FloorLamps.jpg",
    },
    {
      tag: "UPTO 50% OFF",
      title: "OFFICE CHAIR",
      desc: "Breathe Easy, Work Even Harder",
      price: "₹3,989",
      img: "/images/Home/HomeTemple.webp",
    },
    {
      tag: "UPTO 50% OFF",
      title: "OFFICE CHAIR",
      desc: "Breathe Easy, Work Even Harder",
      price: "₹3,989",
      img: "/images/Home/FloorLamps.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.hero3Container}>
      <div className={styles.topSection}>
        <div className={styles.leftText}>
          <h2>Beautify Every Corner with Elegance</h2>
          <p>Explore timeless pieces for every nook and space</p>
          <span className={styles.offer}>UPTO 60% OFF</span>

          <img
            src="/images/Home/FloorLamps.jpg"
            alt="decorative"
            className={styles.decorImage}
          />
          <span className={styles.DecorativeName}>Light Show</span>
        </div>

        <div className={styles.rightGrid}>
          {topCards.map((card, i) => (
            <div key={i} className={styles.productCard}>
              <img className={styles.productImg} src={card.img} alt={card.name} />
              <div className={styles.productName}>{card.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomSection}>
        <Slider {...settings} className={styles.slider}>
          {sliderCards.map((s, i) => (
            <div key={i} className={styles.slideWrapper}>
              <div className={styles.sliderCard}>
                <div className={styles.cardContent}>
                  <div className={styles.discountTag}>{s.tag}</div>
                  <h3>{s.title}</h3>
                  <p className={styles.desc}>{s.desc}</p>
                  <div className={styles.price}>
                    Starting From <strong>{s.price}</strong>
                  </div>
                  <div className={styles.delivery}>FREE Delivery Available</div>
                </div>
                <div className={styles.cardImage}>
                  <img src={s.img} alt={s.title} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    className={`${styles.arrow} ${styles.next}`}
    onClick={onClick}
    aria-label="Next"
  >
    <FaChevronRight />
  </button>
);
const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    className={`${styles.arrow} ${styles.prev}`}
    onClick={onClick}
    aria-label="Prev"
  >
    <FaChevronLeft />
  </button>
);

export default HeroSection3;
