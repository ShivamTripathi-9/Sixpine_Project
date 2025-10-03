import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";
import SixpineApp from "../components/SixpineApp.jsx";
import Footer from "../components/footer.jsx";

import "./Pages.css";


const SixpineAppPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <div className="sixpineapp_container">

      <SixpineApp/>
     
      </div>

  
      <Footer />

      
       
    </div>
  );
};

export default SixpineAppPage;


