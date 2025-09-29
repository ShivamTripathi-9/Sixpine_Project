import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";
import Footer from "../components/footer.jsx";
import PressRelease from "../components/PressRelease.jsx";



const PressReleasePage  : React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <PressRelease />
      

  
      <Footer />

      
       
    </div>
  );
};

export default PressReleasePage;


