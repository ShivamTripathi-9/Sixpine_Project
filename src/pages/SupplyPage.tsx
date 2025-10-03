import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";
import Supply from "../components/Supply.jsx";
import Footer from "../components/footer.jsx";
import "./Pages.css"; 



const SupplyPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <div className="supply_container">

      <Supply/>
     
      </div>

  
      <Footer />

      
       
    </div>
  );
};

export default SupplyPage;


