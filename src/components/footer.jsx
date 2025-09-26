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
            <li>Shop</li>
            <li>Deals</li>
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
            <li>Sixpine Global Selling</li>
            <li>Supply to Sixpine</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>

        <div>
          <h3>Policies</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclaimer</li>
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
            <li>Recalls & Product Safety Alert</li>
            <li>100% Purchase Protection</li>
            <li>Download the Sixpine App 📱</li>
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
