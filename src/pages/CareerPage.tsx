import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";


import Footer from "../components/footer.jsx";
import Career from "../components/career.jsx";

import "./Pages.css"; 

const CareerPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
         <div className="career_container">
      <Career />
      
</div>
  
      <Footer />

      
       
    </div>
  );
};

export default CareerPage;


