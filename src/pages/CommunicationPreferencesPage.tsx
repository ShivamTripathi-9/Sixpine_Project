import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";
import Footer from "../components/footer.jsx";
import CommunicationPreferences from "../components/communication-preferences.jsx";


import ProductSider from "../components/Advertising-prefereces/productSlider.jsx";

import "./Pages.css";

const CommunicationPreferencesPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <div className="communicationpreferences_container">
      <CommunicationPreferences />
       <ProductSider/>

      </div>
      <Footer />

      
       
    </div>
  );
};

export default CommunicationPreferencesPage;

