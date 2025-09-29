import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx"; 

import Footer from "../components/footer.jsx";
import Login from "../components/login.jsx";




const AboutPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <Login />
      

  
      <Footer />

      
       
    </div>
  );
};

export default AboutPage;


