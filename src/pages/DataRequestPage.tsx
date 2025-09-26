import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/footer.jsx";
import DataRequest from "../components/data-request.jsx";




const AboutPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <Navigationdown /> */}
      <DataRequest />
      

  
      <Footer />

      
       
    </div>
  );
};

export default AboutPage;


