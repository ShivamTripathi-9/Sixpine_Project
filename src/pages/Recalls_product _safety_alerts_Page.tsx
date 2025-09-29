  import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";

import Recalls_product from "../components/Recalls_product _safety_alerts.jsx";

import Footer from "../components/footer.jsx";




const CareerPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />

   <Recalls_product/>
     
      

  
      <Footer />

      
       
    </div>
  );
};

export default CareerPage;


