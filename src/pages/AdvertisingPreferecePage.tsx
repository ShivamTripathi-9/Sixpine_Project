import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";

import Footer from "../components/footer.jsx";
import Advertising_Preferece from "../components/Advertising-prefereces/advertising_prefereces.jsx";

import ProductSider from "../components/Advertising-prefereces/productSlider.jsx";


import "./Pages.css"; 

const AdvertisingPreferecePage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <NavigationDown /> */}

         <div className="advertisingpreferece_container">

      

      <Advertising_Preferece/>
      <ProductSider/>
      
      
   </div>
  
      <Footer />

      
       
    </div>
  );
};

export default AdvertisingPreferecePage;


