import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";


import Footer from "../components/footer.jsx";
import Advertise from "../components/Advertise.jsx";

import "./Pages.css";

const AdvertisePage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
          <div className="advertisepage_container">
      <Advertise />
      
</div>
  
      <Footer />

      
       
    </div>
  );
};

export default AdvertisePage;


