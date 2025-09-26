import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import CommunicationPreferences from "../components/communication-preferences.jsx";


import ProductSider from "../components/Advertising-prefereces/productSlider.jsx";



const AboutPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <Navigationdown /> */}
      <CommunicationPreferences />
       <ProductSider/>

  
      <Footer />

      
       
    </div>
  );
};

export default AboutPage;


