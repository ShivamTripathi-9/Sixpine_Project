import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx"; 

import Footer from "../components/footer.jsx";
import Global_Selling from "../components/global_selling.jsx";

import "./Pages.css";


const Global_SellingPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <div className="global_selling_container">
      <Global_Selling />
      

  </div>
      <Footer />

      
       
    </div>
  );
};

export default Global_SellingPage;


