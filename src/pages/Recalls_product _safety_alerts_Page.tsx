  import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";

import Recalls_product from "../components/Recalls_product _safety_alerts.jsx";

import Footer from "../components/footer.jsx";
import "./Pages.css";


const RecallsProductSafetyAlertsPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <div className="recalls_product_container">

   <Recalls_product/>
     
      </div>

  
      <Footer />

      
       
    </div>
  );
};

export default RecallsProductSafetyAlertsPage;


