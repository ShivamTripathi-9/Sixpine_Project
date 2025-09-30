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


const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <HeroSection />

      <HeroSection2 />
      <HeroSection3 />
      <FurnitureCategories />
      <FurnitureSections />
      <FurnitureOfferSection />
      <BannerCards />
      <HomepageText/>
  
      <Footer />

      
       
    </div>
  );
};

export default Homepage;
