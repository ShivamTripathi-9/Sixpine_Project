import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";


import Footer from "../components/footer.jsx";
import Advertise from "../components/Advertise.jsx";



const CareerPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <Advertise />
      

  
      <Footer />

      
       
    </div>
  );
};

export default CareerPage;


