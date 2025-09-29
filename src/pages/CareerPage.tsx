import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";


import Footer from "../components/footer.jsx";
import Career from "../components/career.jsx";



const CareerPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <NavigationDown /> */}
      <Career />
      

  
      <Footer />

      
       
    </div>
  );
};

export default CareerPage;


