import React, { useState, useRef } from "react"; // Added useRef here
import styles from "./productdetails.module.css";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai"; // info icon
import { BsTagFill } from "react-icons/bs";

const ProductDetails = () => {


const images = [
   "https://ii1.pepperfry.com/media/catalog/product/m/d/494x544/mdf---sheesham-wood-pooja-mandir-in-copper-by-d-dass-mdf---sheesham-wood-pooja-mandir-in-copper-by-d-1up9tw.jpg",
    "https://ochaka.vercel.app/images/products/fashion/product-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmxEvubyreV01Px8O2aLAvKF5TiFsX9Te1dhAKPAelRlrdtboqZkK-MBwRYeYRTOljMvQ&usqp=CAU",
    "https://www.worldwin.in/upload/product/472794.jpeg",
  ];


  


  const [mainImage, setMainImage] = useState(images[0]);


// refs for lens zoom
  const imgRef = useRef(null);
  const lensRef = useRef(null);
  const resultRef = useRef(null);

  const zoom = 4; // zoom factor
  const lensSize = 75;
  

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const lens = lensRef.current;
    const result = resultRef.current;

    const rect = img.getBoundingClientRect();
    let x = e.clientX - rect.left - lens.offsetWidth / 2;
    let y = e.clientY - rect.top - lens.offsetHeight / 2;

      // clamp lens inside image
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > rect.width - lens.offsetWidth) x = rect.width - lens.offsetWidth;
    if (y > rect.height - lens.offsetHeight) y = rect.height - lens.offsetHeight;

    // move lens
    lens.style.left = x + "px";
    lens.style.top = y + "px";

    // zoomed background
    result.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
    result.style.backgroundPosition = `-${x * zoom}px -${y * zoom}px`;
  };

const handleMouseEnter = () => {
    lensRef.current.style.display = "block";
    resultRef.current.style.display = "block";
    resultRef.current.style.backgroundImage = `url(${mainImage})`;
  };

  const handleMouseLeave = () => {
    lensRef.current.style.display = "none";
    resultRef.current.style.display = "none";
  };




  // State for options
  const [selectedColor, setSelectedColor] = useState("Red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedPattern, setSelectedPattern] = useState("Classic");

  // Cart Summary
  const [cartQty, setCartQty] = useState(1);
  const cartPrice = 29999;
  const cartTotal = cartPrice * cartQty;

  // BedSofa
  const [bedSofaQty, setBedSofaQty] = useState(1);
  const bedSofaPrice = 29999;
  const bedSofaTotal = bedSofaPrice * bedSofaQty;

  // Handmade
  const [handmadeQty, setHandmadeQty] = useState(1);
  const handmadePrice = 29999;
  const handmadeTotal = handmadePrice * handmadeQty;

  // Modal
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (type) => {
    if (type === "delivery") {
      setModalContent({
        title: "Free Delivery",
        text: "Get free doorstep delivery on all orders above ₹20,000.",
        buttons: ["Got it", "Shop More"],
      });
    } else if (type === "replacement") {
      setModalContent({
        title: "7 Days Replacement",
        text: "You can replace this product within 7 days of delivery if it has defects.",
        buttons: ["Understood", "See Policy"],
      });
    } else if (type === "secure") {
      setModalContent({
        title: "Secure Transaction",
        text: "Your payment is protected by end-to-end encryption and secure gateways.",
        buttons: ["Okay", "Know More"],
      });
    }
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  return (
    <div className={styles.productPage}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <a href="#">All</a> / <a href="#">New Arrivals</a> /{" "}
        <a href="#">Category</a> / Product Name
      </div>

      <div className={styles.mainLayout}>
       {/* Image + Zoom Section */}
         <div className={styles.imageSection}>
       <div
            className={styles.imageWrapper}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
           <img
              ref={imgRef}
              src={mainImage}
              alt="Product"
              className={styles.mainImage}
            /> 
            <div
              ref={lensRef}
              className={styles.lens}
              style={{ width: lensSize, height: lensSize }}
            ></div>
          </div>
         

      {/* Thumbnails */}
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`${styles.thumbnail} ${
              mainImage === img ? styles.activeThumb : ""
            }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>

        {/* PART 2 - MIDDLE DETAILS */}
        <div className={styles.details}>

 <div ref={resultRef} className={styles.zoomResult}></div>

          <h2 className={styles.title}>PRODUCT TITLE GOES HERE</h2>
          <p className={styles.brand}>Brand: Staples</p>

          {/* Ratings */}
          <div className={styles.ratings}>
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar />
            <span>(132 Ratings)</span>
          </div>

          {/* Price */}
          <div className={styles.priceBox}>
            <p className={styles.price}>
              ₹ 29,999 <span>/month (6 months)</span>
            </p>
            <p className={styles.total}>Total ₹ 39,999</p>
            <p className={styles.discount}>50% Off ₹60,000</p>
          </div>

          <h4 className={styles.offersTitle}>Available Offers</h4>
          <ul className={styles.offers}>
      <li>
        <BsTagFill className={styles.greenIcon} />
        10% off on using XYZ card
      </li>
      <li>
        <BsTagFill className={styles.greenIcon} />
        Shipping on orders above ₹20,000
      </li>
      <li>
        <FaCheckCircle className={styles.greenIcon} /> Free Delivery{" "}
        <AiOutlineInfoCircle
          className={styles.infoIcon}
          onClick={() => handleOpenModal("delivery")}
        />
      </li>
      <li>
        <FaCheckCircle className={styles.greenIcon} /> 7 Days Replacement{" "}
        <AiOutlineInfoCircle
          className={styles.infoIcon}
          onClick={() => handleOpenModal("replacement")}
        />
      </li>
      <li>
        <FaCheckCircle className={styles.greenIcon} /> Secure Transaction{" "}
        <AiOutlineInfoCircle
          className={styles.infoIcon}
          onClick={() => handleOpenModal("secure")}
        />
      </li>
    </ul>
          {/* Options */}
          <div className={styles.options}>
            <div>
              <strong>Color: </strong>
              {["Red", "Blue", "Black"].map((color) => (
                <button
                  key={color}
                  className={selectedColor === color ? styles.active : ""}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
            <div>
              <strong>Size: </strong>
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? styles.active : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div>
              <strong>Pattern: </strong>
              {["Exact", "Classic"].map((pat) => (
                <button
                  key={pat}
                  className={selectedPattern === pat ? styles.active : ""}
                  onClick={() => setSelectedPattern(pat)}
                >
                  {pat}
                </button>
              ))}
            </div>
          </div>

          {/* Modal */}
          {modalContent && (
            <div className={styles.modalOverlay}>
              <div className={styles.modal}>
                <h2>{modalContent.title}</h2>
                <p>{modalContent.text}</p>
                <div className={styles.modalButtons}>
                  {modalContent.buttons.map((btn, idx) => (
                    <button key={idx} onClick={handleCloseModal}>
                      {btn}
                    </button>
                  ))}
                </div>
                <button className={styles.closeBtn} onClick={handleCloseModal}>
                  ✖
                </button>
              </div>
            </div>
          )}

          

<div className={styles.productDetailsContent}>
      <h3>Key Details</h3>
      <div className={styles.keyDetailsGrid}>
        <div className={styles.detailCard}><strong>Brand:</strong> Atomberg</div>
        <div className={styles.detailCard}><strong>Depth:</strong> 12 inch</div>
        <div className={styles.detailCard}><strong>Style:</strong> Modern</div>
        <div className={styles.detailCard}><strong>Frame:</strong> Metal</div>
        <div className={styles.detailCard}><strong>Assembly:</strong> Required</div>
        <div className={styles.detailCard}><strong>Seating:</strong> 1 Person</div>
        <div className={styles.detailCard}><strong>Shape:</strong> Round</div>
      </div>

<h3>About This Item</h3>
  <ul className={styles.aboutItemList}>
    <li>High performance and energy efficient.</li>
    <li>Elegant design suitable for modern interiors.</li>
    <li>Durable metal frame ensures long-lasting use.</li>
    <li>Easy to assemble and maintain.</li>
    <li>Lightweight and portable.</li>
    <li>1-year warranty included.</li>
  </ul>

  <button className={styles.seeMoreBtn}>See More</button>

      </div>




        </div>

        {/* PART 3 - RIGHT SIDEBAR */}
        <div className={styles.sidebar}>
          {/* CART SUMMARY */}
          <div className={styles.cartSummary}>
            <h3>CART SUMMARY</h3>
            <p>
              {cartQty} x Product Title - ₹{cartPrice.toLocaleString()}
            </p>
            <p>
              <strong>Total: ₹{cartTotal.toLocaleString()}</strong>
            </p>

            <div className={styles.cartControls}>
              <button
                onClick={() => cartQty > 1 && setCartQty(cartQty - 1)}
                className={styles.qtyBtn}
              >
                <FaTrash />
              </button>
              <span className={styles.qty}>{cartQty}</span>
              <button
                onClick={() => setCartQty(cartQty + 1)}
                className={styles.qtyBtn}
              >
                +
              </button>
            </div>

            <button className={styles.addCart}>Add to Cart</button>
            <button className={styles.buyNow}>Buy Now</button>
          </div>

          {/* SPECIAL OFFER */}
          <div className={styles.specialOffer}>
            <img
              src="https://ochaka.vercel.app/images/products/fashion/product-1.jpg"
              alt="Offer"
            />
            <p>
              <strong>Special Offer: 20% Off</strong>
            </p>
            <button className={styles.buyNow}>Check Now</button>
          </div>
        </div>


        {/* PART 4 - EXTRA SIDEBAR */}



        
        <div className={styles.sidebar}>
          {/* Sub Total */}
          <div className={styles.subTotal}>
            <p>
              <strong>Sub Total</strong>
            </p>
            <h2>₹{cartTotal.toLocaleString()}</h2>
            <button className={styles.goCart}>Go to Cart</button>
          </div>

          {/* BEDSOFA */}
          <div className={styles.specialOffer2}>
            <img
              src="https://ochaka.vercel.app/images/products/fashion/product-1.jpg"
              alt="Offer"
            />
            <h3>Bedsofa</h3>
            
            <p style={{ color: "red", fontSize: "16px", margin: 0 }}>
              <strong>₹{bedSofaTotal.toLocaleString()}</strong>
            </p>

            <div className={styles.cartControls2}>
              <button
                onClick={() => bedSofaQty > 1 && setBedSofaQty(bedSofaQty - 1)}
                className={styles.qtyBtn}
              >
                <FaTrash />
              </button>
              <span className={styles.qty}>{bedSofaQty}</span>
              <button
                onClick={() => setBedSofaQty(bedSofaQty + 1)}
                className={styles.qtyBtn}
              >
                +
              </button>
            </div>
          </div>

          {/* HANDMADE */}
          <div className={styles.handmade}>
           <div className={styles.handmadeContent}>
    <h4>HAND MADE</h4>
    <p>
      WITH <span style={{ color: "red" }}>❤</span> LOVE
    </p>
  </div>
            {/* <h2>₹{handmadePrice.toLocaleString()}</h2> */}

            <p style={{ color: "red", fontSize: "16px", margin: 0 }}>
              <strong>₹{handmadeTotal.toLocaleString()}</strong>
            </p>

            <div className={styles.cartControls2}>
              <button
                onClick={() =>
                  handmadeQty > 1 && setHandmadeQty(handmadeQty - 1)
                }
                className={styles.qtyBtn}
              >
                <FaTrash />
              </button>
              <span className={styles.qty}>{handmadeQty}</span>
              <button
                onClick={() => setHandmadeQty(handmadeQty + 1)}
                className={styles.qtyBtn}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
