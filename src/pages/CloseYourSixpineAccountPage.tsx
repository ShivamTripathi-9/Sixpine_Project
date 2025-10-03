import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";
import Footer from "../components/footer.jsx";
import CloseYourSixpineAccount from "../components/CloseYourSixpineAccount.jsx";

import "./Pages.css"; 


const CloseYourSixpineAccountPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      
      <div className="closeyoursixpineaccount_container">
      <CloseYourSixpineAccount />
      
</div>
  
      <Footer />

      
       
    </div>
  );
};

export default CloseYourSixpineAccountPage;


