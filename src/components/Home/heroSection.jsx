import React, { useState, useEffect } from 'react';
import './heroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Be the Perfect Host",
      subtitle: "Coffee Table",
      price: "₹ 2,499",
      buttonText: "BUY NOW",
      backgroundColor: "#C4A484"
    },
    {
      id: 2,
      title: "Comfort Redefined",
      subtitle: "Sofa Collection",
      price: "₹ 15,999",
      buttonText: "BUY NOW",
      backgroundColor: "#8B7355"
    },
    {
      id: 3,
      title: "Sleep in Style",
      subtitle: "Bedroom Sets",
      price: "₹ 25,999",
      buttonText: "BUY NOW",
      backgroundColor: "#A68B5B"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-grid">
          
          {/* Main Carousel */}
          <div 
            className="main-carousel"
            style={{ backgroundColor: slides[currentSlide].backgroundColor }}
          >
            {/* Navigation Arrows */}
            <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="nav-arrow nav-arrow-right" onClick={nextSlide}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Slide Content */}
            <div className="slide-content">
              {/* Text Content */}
              <div className="slide-text">
                <p className="slide-subtitle">{slides[currentSlide].title}</p>
                <h1 className="slide-title">{slides[currentSlide].subtitle}</h1>
                <div className="price-section">
                  <p className="starting-from">Starting From</p>
                  <div className="price-container">
                    <span className="price">{slides[currentSlide].price}</span>
                    <span className="asterisk">*</span>
                  </div>
                </div>
                <button className="buy-now-btn">{slides[currentSlide].buttonText}</button>
              </div>

              {/* Product Image */}
              <div className="product-image">
                <div className="image-placeholder">
                  <img 
                    src="/images/hero.jpeg" 
                    alt="Coffee Table with woman reading"
                    className="product-img"
                  />
                </div>
              </div>
            </div>

            {/* Brand Logo */}
            <div className="brand-logo">T&C Apply</div>

            {/* Slide Indicators */}
            <div className="slide-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Side Panels */}
          <div className="right-panels">
            {/* Special Deal - Bedroom */}
            <div className="bedroom-panel">
              <div className="bedroom-content">
                <div className="bedroom-text">
                  {/* Special Deal Badge */}
                  <div className="special-deal-badge">SPECIAL DEAL</div>
                  <div className="upto-text">UPTO</div>
                  <div className="discount-price">₹5000 OFF</div>
                  <div className="instant-discount">INSTANT DISCOUNT</div>
                  <button className="bedroom-buy-btn">BUY NOW</button>
                </div>
                
                {/* Bedroom Image */}
                {/* <div className="bedroom-image">
                  <img 
                    src="/images/bedroom-img.jpg" 
                    alt="Bedroom Set"
                    className="bedroom-img"
                  />
                </div> */}
              </div>
            </div>

            {/* Mattress Section */}
            <div className="mattress-panel">
              {/* Ships in 2 Days Badge */}
              <div className="ships-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M16 3H1V16H16V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8H20L23 11V16H16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Ships in 2 Days
              </div>

              <div className="mattress-content">
                <div className="mattress-text">
                  <h3 className="mattress-title">MATTRESS</h3>
                  <p className="mattress-subtitle">That Turns Sleep into Therapy</p>
                  <div className="mattress-price-section">
                    <span className="starting-text">Starting From</span>
                    <div className="mattress-price">₹9,999</div>
                    <div className="free-delivery">FREE Delivery Available</div>
                  </div>
                </div>

                {/* Mattress Image */}
                {/* <div className="mattress-image">
                  <img 
                    src="/images/bedroom-img.jpg"  
                    alt="Mattress with couple"
                    className="mattress-img"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Support Section */}
        <div className="support-buttons">
          {/* Buy On Phone */}
          <div className="support-btn phone-btn">
            <div className="support-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19.92C22 20.52 21.52 21.01 20.92 21.01C9.39 21.01 2.99 14.61 2.99 3.08C2.99 2.48 3.48 2 4.08 2H7.08C7.68 2 8.16 2.48 8.16 3.08C8.16 4.08 8.35 5.05 8.71 5.94C8.87 6.31 8.76 6.76 8.44 7.04L6.9 8.22C8.07 10.86 10.13 12.92 12.77 14.09L13.95 12.55C14.23 12.23 14.68 12.12 15.05 12.28C15.94 12.64 16.91 12.83 17.91 12.83C18.51 12.83 18.99 13.31 18.99 13.91V16.91H22V16.92Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="support-text">
              <div>Buy On</div>
              <div>Phone</div>
            </div>
          </div>

          {/* Get Expert Help */}
          <div className="support-btn expert-btn">
            <div className="support-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 15C21 15.54 20.54 16 20 16H7L3 20V4C3 3.46 3.46 3 4 3H20C20.54 3 21 3.46 21 4V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="support-text">
              <div>Get Expert</div>
              <div>Help</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;