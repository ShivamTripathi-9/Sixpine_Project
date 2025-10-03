import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";


import Footer from "../components/footer.jsx";
import Login from "../components/login.jsx";

import "./Pages.css";


const LoginPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <div className="login_container">
      <Login />
      </div>

  
      <Footer />

      
       
    </div>
  );
};

export default LoginPage;


