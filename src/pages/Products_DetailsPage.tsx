import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import Productdetails from "../components/Products_Details/productdetails.jsx";
import ProductInformation from "../components/Products_Details/productInformation.jsx";
import CustomerReview from "../components/Products_Details/customerReview.jsx";
import Productdetails_Slider1 from "../components/Products_Details/productdetails_slider1.jsx";
import Productdetails_Slider2 from "../components/Products_Details/productdetails_slider2.jsx";




const Product_DetailsPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <Navigationdown /> */}
      <Productdetails/>

     <Productdetails_Slider2/>
     
      <ProductInformation/>
      <CustomerReview/>
      <Productdetails_Slider1/>

    
      <Footer />

      
       
    </div>
  );
};

export default Product_DetailsPage;


