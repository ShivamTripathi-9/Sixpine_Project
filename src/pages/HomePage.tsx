import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx"; 
import NavigationDown from "../components/Navigationdown.jsx"; 
import Footer from "../components/footer.jsx";
import HeroSection from "../components/Home/heroSection.jsx";
import HeroSection2 from "../components/Home/heroSection2.jsx";
import HeroSection3 from "../components/Home/heroSection3.jsx";
import BannerCards from "../components/Home/bannerCards.jsx";
import FurnitureCategories from "../components/Home/furnitureCategories.jsx";
import FurnitureSections from "../components/Home/furnitureSections.jsx";
import FurnitureOfferSection from "../components/Home/furnitureOfferSections.jsx";
import HomepageText from "../components/Home/HomepageText.jsx";

import FeatureCard from "../components/Home/FeatureCard.jsx";

import "./Pages.css";

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />

     {/* Container wrap */}
      <div className="homepage_container">
        <HeroSection />
        <HeroSection2 />
        <HeroSection3 />
        <FurnitureCategories />
        <FurnitureSections />
        <FurnitureOfferSection />
        <FeatureCard />
        <BannerCards />
        <HomepageText />
      </div>
  
      <Footer />

      
       
    </div>
  );
};

export default Homepage;
