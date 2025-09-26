import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx"; 
import Footer from "../components/Footer.jsx";
import HeroSection from "../components/Home/heroSection.jsx";
import HeroSection2 from "../components/Home/heroSection2.jsx";
import HeroSection3 from "../components/Home/heroSection3.jsx";
import BannerCards from "../components/Home/bannerCards.jsx";
import FurnitureCategories from "../components/Home/furnitureCategories.jsx";
import FurnitureSections from "../components/Home/furnitureSections.jsx";
import FurnitureOfferSection from "../components/Home/furnitureOfferSections.jsx";


const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <Navigationdown /> */}
      <HeroSection />
      <HeroSection2 />
      <HeroSection3 />
      <FurnitureCategories />
      <FurnitureSections />
      <FurnitureOfferSection />


      <BannerCards />
  
      <Footer />

      
       
    </div>
  );
};

export default Homepage;
