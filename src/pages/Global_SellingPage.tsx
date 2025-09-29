import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx"; 

import Footer from "../components/footer.jsx";
import Global_Selling from "../components/global_selling.jsx";




const AboutPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <Global_Selling />
      

  
      <Footer />

      
       
    </div>
  );
};

export default AboutPage;


