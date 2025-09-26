import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import PressRelease from "../components/PressRelease.jsx";



const PressReleasePage  : React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <Navigationdown /> */}
      <PressRelease />
      

  
      <Footer />

      
       
    </div>
  );
};

export default PressReleasePage;


