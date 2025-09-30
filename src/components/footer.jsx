import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* Back to top */}
      <div className={styles.backToTop} onClick={scrollToTop}>
        Back to top
      </div>

      {/* Footer Links */}
      <div className={styles.footerLinks}>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
              <li>About Us</li>
                <li>Offers & Discounts</li>
          
            <li>Blog / Furniture Guides</li>
              <li>Contact Us</li>
      
          
          </ul>
        </div>

        <div>
          <h3>Get to Know Us</h3>
          <ul>
            <li><Link to="/about">About Sixpine</Link></li>
            <li><Link to="/career">Careers</Link></li>
            <li><Link to="/press-release">Press Releases</Link></li>
          </ul>
        </div>

        <div>
          <h3>Connect with Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>

        <div>
          <h3>Make Money with Us</h3>
          <ul>
            <li><Link to="/global-selling">Sixpine Global Selling</Link></li>
         
            <li><Link to="/supply">Supply to Sixpine</Link></li>
             <li><Link to="/advertise">Advertise Your Products</Link></li>

          </ul>
        </div>

        <div>
          <h3>Customer Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Order Tracking</li>
            <li>Warranty Policy</li>
            <li>Payment Options</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3>Customer Service</h3>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns Centre</li>
            <li>Support Link to WhatsApp</li>
          </ul>
        </div>

        <div>
          <h3>Let Us Help You</h3>
          <ul>
            
            <li><Link to="/your-account"> Your Account </Link></li>
            <li> <Link to ="/recalls_product">Recalls & Product Safety Alert </Link> </li>
            <li> <Link to ="/purchaseProtection">100% Purchase Protection </Link></li>
            <li> <Link to ="/your-app">Download the Sixpine App 📱</Link></li>
          
            <li>Help</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.logo}>Sixpine Logo....</div>
        <div className={styles.languageSelector}>
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <span>🌍 India</span>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyRight}>
        © 2025 Sixpine. All Rights Reserved.
      </div>
    </footer>
  );
}
