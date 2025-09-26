import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/footer.jsx";
import CloseYourSixpineAccount from "../components/CloseYourSixpineAccount.jsx";




const AboutPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <Navigationdown /> */}
      <CloseYourSixpineAccount />
      

  
      <Footer />

      
       
    </div>
  );
};

export default AboutPage;


