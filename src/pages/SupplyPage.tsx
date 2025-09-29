import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";
import Supply from "../components/Supply.jsx";
import Footer from "../components/footer.jsx";




const CareerPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />

      <Supply/>
     
      

  
      <Footer />

      
       
    </div>
  );
};

export default CareerPage;


