import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import Login from "../components/login.jsx";




const AboutPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <Navigationdown /> */}
      <Login />
      

  
      <Footer />

      
       
    </div>
  );
};

export default AboutPage;


