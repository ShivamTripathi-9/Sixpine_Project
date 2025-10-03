import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";
import Footer from "../components/footer.jsx";
import Loginsecurity from "../components/loginsecurity.jsx";
import Productdetails_Slider1 from "../components/Products_Details/productdetails_slider1.jsx";


import "./Pages.css";

const LoginSecurityPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <div className="loginsecurity_container">
      <Loginsecurity />

      <Productdetails_Slider1/>

      </div>

  
      <Footer />

      
       
    </div>
  );
};

export default LoginSecurityPage;


