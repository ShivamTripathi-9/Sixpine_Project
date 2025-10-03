import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";

import Footer from "../components/footer.jsx";
import About from "../components/About.jsx";

import "./Pages.css";


const AboutPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <div className="aboutpage_container">
      <About />
      
</div>
  
      <Footer />

      
       
    </div>
  );
};

export default AboutPage;


