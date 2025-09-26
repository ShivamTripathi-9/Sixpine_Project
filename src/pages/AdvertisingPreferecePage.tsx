import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/footer.jsx";
import Advertising_Preferece from "../components/Advertising-prefereces/advertising_prefereces.jsx";

import ProductSider from "../components/Advertising-prefereces/productSlider.jsx";




const CareerPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <Navigationdown /> */}

      <Advertising_Preferece/>
      <ProductSider/>
      
      

  
      <Footer />

      
       
    </div>
  );
};

export default CareerPage;


