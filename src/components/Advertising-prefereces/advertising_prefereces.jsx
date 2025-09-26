import React from "react";
import styles from "./advertising_prefereces.module.css";

import { FaBullhorn, FaCheck, FaCog } from "react-icons/fa";

function AdvertisingPreferences() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <FaCog className={styles.icon} />
        <h2 className={styles.heading}>Advertising Preferences</h2>
      </div>

      <p className={styles.subText}>
        We use your browsing and shopping activity to show you more relevant ads. <br />
        <b>Turn ON button:</b> Get personalized offers, product recommendations, and promotions. <br />
        <b>Turn OFF button:</b> You’ll still see ads, but they may be less relevant.
      </p>

      {/* Title Section */}
      <div className={styles.title}>
        <FaBullhorn className={styles.titleIcon} />
        <h3 className={styles.subHeading}>Advertising Preferences</h3>
      </div>

      <p className={styles.desc}>
        We respect your privacy and want to give you full control over how we use your information for advertising.
      </p>

      {/* Sections */}
      <div className={styles.section}>
        <h4>1. <b>Personalized Ads</b></h4>
        <p><b>Personalized ads</b> are tailored to your interests based on your browsing and shopping activity...</p>
      </div>

      <div className={styles.section}>
        <h4>2. <b>Non-Personalized Ads</b></h4>
        <p>If you opt out of personalized ads, you will still see advertisements...</p>
      </div>

      <div className={styles.section}>
        <h4>3. <b>How We Use Your Data</b></h4>
        <ul className={styles.checkList}>
          <li><FaCheck className={styles.checkIcon} /> <b>Browsing history</b> on our website/app</li>
          <li><FaCheck className={styles.checkIcon} /> <b>Demographic information</b> (age group, location, device type)</li>
          <li><FaCheck className={styles.checkIcon} /> <b>Interactions</b> with promotions and campaigns</li>
          <li><FaCheck className={styles.checkIcon} /> <b>Manage cookie preferences</b> to control data collection for ads</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>4. <b>Your Choices</b></h4>
        <ul className={styles.checkList}>
          <li><FaCheck className={styles.checkIcon} /> <b>Opt in or out</b> of personalized advertising...</li>
          <li><FaCheck className={styles.checkIcon} /> <b>Request deletion</b> of your advertising data...</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>5. <b>Third-Party Advertising Partners</b></h4>
        <p>We may work with trusted partners (e.g., Google, Meta, ad networks)...</p>
      </div>

      <div className={styles.section}>
        <h4>6. <b>Why You Still See Ads After Opt Out</b></h4>
        <p>Even if you turn off personalized ads, you may still see...</p>
      </div>
    </div>
  );
}

export default AdvertisingPreferences;
