import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";
import PurchaseProtection from "../components/PurchaseProtection.jsx";
import Footer from "../components/footer.jsx";



import "./Pages.css";
const PurchaseProtectionPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <div className="purchaseprotection_container">

      <PurchaseProtection/>
      </div>

  
      <Footer />

      
       
    </div>
  );
};

export default PurchaseProtectionPage;


