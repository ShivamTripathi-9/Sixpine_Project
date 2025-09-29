import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx"; 
import Footer from "../components/footer.jsx";
import Account  from "../components/Account/yourAccount.jsx";
import ProductSlider from "../components/Account/productSlider.jsx";




const AccountPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <Account />
      <ProductSlider />
      <Footer />

      
       
    </div>
  );
};

export default AccountPage;


