import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Homepage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import CareerPage from "./pages/CareerPage.tsx";
import PressReleasePage from "./pages/PressReleasePage.tsx";
import AccountPage from "./pages/AccountPage.tsx";
import Products_DetailsPage from "./pages/Products_DetailsPage.tsx";
import AdvertisingPreferecePage from "./pages/AdvertisingPreferecePage.tsx";
import Global_SellingPage from "./pages/Global_SellingPage.tsx";
import CloseYourSixpineAccountPage  from "./pages/CloseYourSixpineAccountPage.tsx";
import FeedbackPage from "./pages/FeedbackPage.tsx";
import DataRequestPage from "./pages/DataRequestPage.tsx";
import CommunicationPreferencesPage from "./pages/CommunicationPreferencesPage.tsx";
import LoginSecurityPage from "./pages/LoginSecurityPage.tsx";
import EmailSubscriptionsPage from "./pages/EmailSubscriptionsPage.tsx";
import SupplyPage from "./pages/SupplyPage.tsx";
import Recalls_product from "./pages/Recalls_product _safety_alerts_Page.tsx";
import PurchaseProtectionPage from "./pages/PurchaseProtectionPage.tsx";
import SixPineApp from "./pages/SixpineAppPage.tsx";
import AdvertisePage from "./pages/AdvertisePage.tsx";
import TawkToChat from './components/TawkToChat.jsx'; 

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <Router>
        <ScrollToTop />
        
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products-details" element={<Products_DetailsPage/>}/>
        <Route path="/career" element={<CareerPage />} />
        <Route path="/press-release" element={<PressReleasePage />} />
        <Route path="/your-account" element={<AccountPage />} />
        <Route path="/data-request" element={<DataRequestPage />} />
        <Route path="/global-selling" element={<Global_SellingPage />} />
         <Route path="/feedback" element={<FeedbackPage />} />
         <Route path="/login-security" element={<LoginSecurityPage />} />
         <Route path="/email" element={<EmailSubscriptionsPage/>} />
        <Route path="/advertising-preferece" element={<AdvertisingPreferecePage />} />
        <Route path="/close-your-sixpine-account" element={<CloseYourSixpineAccountPage />} />
        <Route path="/communication-preferences" element={<CommunicationPreferencesPage />} />
        <Route path="/supply" element={<SupplyPage />} />
        <Route path="/recalls_product" element={<Recalls_product/>} />
        <Route path="/purchaseProtection" element={<PurchaseProtectionPage/>} />
        <Route path="/your-app" element={<SixPineApp/>} />
        <Route path="/advertise" element={<AdvertisePage/>} />

      </Routes>

       <TawkToChat />
    </Router>
  );
}

export default App;
