import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import Feedback from "../components/feedback.jsx";




const AboutPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <Navigationdown /> */}
      <Feedback />
      

  
      <Footer />

      
       
    </div>
  );
};

export default AboutPage;


