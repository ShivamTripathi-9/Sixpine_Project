import React from "react";
import Navbar from "../components/Navbar.jsx";  
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/footer.jsx";
import Feedback from "../components/feedback.jsx";

import "./Pages.css";


const FeedbackPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Navigation />
      {/* <Navigationdown /> */}

      <div className="feedback_container">
      <Feedback />
      
</div>
  
      <Footer />

      
       
    </div>
  );
};

export default FeedbackPage;


