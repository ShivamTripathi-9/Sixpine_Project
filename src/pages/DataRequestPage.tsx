import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import NavigationDown from "../components/Navigationdown.jsx";
import Footer from "../components/footer.jsx";
import DataRequest from "../components/data-request.jsx";

import "./Pages.css";


const DataRequestPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      <NavigationDown />
      <div className="datarequest_container">
      <DataRequest />
      
</div>
  
      <Footer />

      
       
    </div>
  );
};

export default DataRequestPage;


