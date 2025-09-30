import React from "react";
import styles from "./FeatureCard.module.css";

const FeatureItem = ({ icon, count, description }) => (
  <div className={styles.featureItem}>
    <div className={styles.icon}>{icon}</div>
    <div>
      <div className={styles.count}>{count}</div>
      <div className={styles.description}>{description}</div>
    </div>
  </div>
);

const Timer = ({ days, hours, mins, secs }) => (
  <div className={styles.timerContainer}>
    <div className={styles.timerLabel}>SALE</div>
    <div className={styles.timerValues}>
      <span>{days}</span><span className={styles.separator}>:</span>
      <span>{hours}</span><span className={styles.separator}>:</span>
      <span>{mins}</span><span className={styles.separator}>:</span>
      <span>{secs}</span>
    </div>
    <div className={styles.timerUnits}>
      <span>Days</span>
      <span>Hrs</span>
      <span>Mins</span>
      <span>Secs</span>
    </div>
    <div className={styles.endsIn}>Ends In</div>
  </div>
);

const OfferBox = ({ icon, text, discount }) => (
  <div className={styles.offerBox}>
    <div className={styles.offerIcon}>{icon}</div>
    <div className={styles.offerContent}>
      <div className={styles.offerText}>{text}</div>
      <div className={styles.discount}>{discount}</div>
    </div>
  </div>
);

const InfoBoxItem = ({ icon, text }) => (
  <div className={styles.infoBoxItem}>
    <div className={styles.infoIcon}>{icon}</div>
    <div className={styles.infoText}>{text}</div>
  </div>
);

const FeaturesAndCTA = () => {
  const days = "01";
  const hours = "13";
  const mins = "19";
  const secs = "14";

  return (
    <div>
      {/* Features Section */}
      <div className={styles.featuresContainer}>
        <FeatureItem icon="🏠" count="100+" description="Experience Stores Across India" />
        <FeatureItem icon="🚚" count="350+" description="Delivery Centers Across India" />
        <FeatureItem icon="👍" count="10 Lakh +" description="Satisfied Customers" />
        <FeatureItem icon="🏆" count="Lowest Price" description="Guarantee" />
        <FeatureItem icon="🗓️" count="36 Months*" description="Warranty" />
      </div>

      {/* Call To Action Section */}
      <div className={styles.callToActionContainer}>
        <Timer days={days} hours={hours} mins={mins} secs={secs} />
        <OfferBox
          icon="📍"
          text="Visit Your Nearest Store & Get Extra UPTO"
          discount="₹ 25,000 INSTANT DISCOUNT"
        />
        <div className={styles.infoBoxes}>
          <InfoBoxItem icon="😊" text="20 Lakh+ Customers" />
          <InfoBoxItem icon="📦" text="Free Delivery" />
          <InfoBoxItem icon="⭐" text="Best Warranty*" />
          <InfoBoxItem icon="🏭" text="15 Lakh sq. ft Mfg. Unit" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndCTA;
