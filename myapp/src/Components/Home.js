import React, { useState, useEffect } from "react";
import "./home.css";

// Image import statement 
import logo from "./images/1200px-Apple_gray_logo 1.png"
import img1 from "./images/Iphone14.jpg"
import img2 from "./images/Frame 611.png"
import img3 from "./images/KeybordCartSmall.jpg"
import img4 from "./images/IPS LCD.png"
import img5 from "./images/Frame 614.png"
import img6 from "./images/Category-CellPhone.png"
import img7 from "./images/Category-Computer.png"
import img8 from "./images/Category-SmartWatch.png"
import img9 from "./images/Category-Camera.png"
import img10 from "./images/Category-Headphone.png"
import img11 from "./images/Category-Gamepad.png"
import img12 from "./images/Frame 605.png"
import img13 from "./images/Frame 606.png"
import img14 from "./images/Frame 610.png"
import img15 from "./images/Frame 612.png"
import img16 from "./images/Frame 694.png"
import img17 from "./images/Frame 604.png"
import img18 from "./images/Frame 604 (1).png"
import img19 from "./images/Frame 604 (2).png"
import img20 from "./images/Curology product set.png"
import img21 from "./images/Frame 608 (3).png"
import img22 from "./images/Frame 608 (2).png"
import img23 from "./images/Frame 608 (1).png"
import img24 from "./images/Quilted.png"
import img25 from "./images/ps5-slim-goedkope-playstation_large 1.png"
import img26 from "./images/woman-wearing-hat.png"
import img27 from "./images/Speakers.png"
import img28 from "./images/Perfume.png"
import img29 from "./images/fastdelivery.png"
import img30 from "./images/support.png"
import img31 from "./images/money.png"


export default function Home() {
  const slides = [
    { id: 1, image: img1, title: "iPhone 14 Series", discount: "10%" },
    { id: 2, image: img1, title: "iPhone 14 Series", discount: "15%" },
    { id: 3, image: img1, title: "iPhone 14 Series", discount: "20%" },
    { id: 4, image: img1, title: "iPhone 14 Series", discount: "25%" },
    { id: 5, image: img1, title: "iPhone 14 Series", discount: "30%" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle Dot Click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Flash sales data
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) return { ...prevTime, seconds: seconds - 1 };
        if (minutes > 0)
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        if (hours > 0)
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0)
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const cards = [
    { id: 1, image: img2, title: "HAVIT HV-G92 Gamepad", discount: "-40%", price: "$120", originalPrice: "$160"   , rating: 1 , ratingPercentage: 88},
    { id: 2, image: img3, title: "AK-900 Wired Keyboard", discount: "-35%", price: "$960", originalPrice: "$1160" , rating: 3 , ratingPercentage: 75},
    { id: 3, image: img4, title: "IPS LCD Gaming Monitor", discount: "-30%", price: "$370", originalPrice: "$400" , rating: 3 , ratingPercentage: 99},
    { id: 4, image: img5, title: "S-Series Comfort Chair", discount: "-25%", price: "$375", originalPrice: "$400" , rating: 4 , ratingPercentage: 90},
    { id: 5, image: img2, title: "HAVIT HV-G92 Gamepad", discount: "-40%", price: "$120", originalPrice: "$160"   , rating: 5 , ratingPercentage: 88},
    { id: 6, image: img3, title: "AK-900 Wired Keyboard", discount: "-35%", price: "$960", originalPrice: "$1160" , rating: 2 , ratingPercentage: 75},
    { id: 7, image: img4, title: "IPS LCD Gaming Monitor", discount: "-30%", price: "$370", originalPrice: "$400" , rating: 3 , ratingPercentage: 99},
    { id: 8, image: img5, title: "S-Series Comfort Chair", discount: "-25%", price: "$375", originalPrice: "$400" , rating: 4 , ratingPercentage: 90},
  ];
  const [flashIndex, setFlashIndex] = useState(0);

  const handlePrev = () => {
    setFlashIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setFlashIndex((prevIndex) =>
      prevIndex === cards.length - 4 ? 0 : prevIndex + 1
    );
  };
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000); // Hide message after 5 seconds
  };


  return (
    <>
       <div className="home-container">
        {/* Sidebar Categories */}
        <div className="sidebar">
          <ul>
            <li>Women's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>

        {/* Main Banner */}
        <div className="main-banner">
          <div className="banner-content">
            <img src={logo} alt="Apple Logo" className="apple-logo" />
            <h2>{slides[currentIndex].title}</h2>
            <p>
              Up to {slides[currentIndex].discount}
              <br /> off Voucher
            </p>
            <a href="#" className="shop-now-btn">
              Shop Now<i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="banner-image"
          />

          {/* Dots Navigation */}
          <div className="dots">
            {slides.map((_, index) => (
             <span
             key={index}
             className={`dot ${currentIndex === index ? "active" : ""}`}
             onClick={() => handleDotClick(index)}
           ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="flash-sales">
      <div className="header">
        <div className="timer-container">
      <div className="timer">
        <div>
          <p>Days</p>
          <span>{timeLeft.days}:</span>
        </div>
        <div>
          <p>Hours</p>
          <span>{timeLeft.hours}:</span>
        </div>
        <div>
          <p>Minutes</p>
          <span>{timeLeft.minutes}:</span>
        </div>
        <div>
          <p>Seconds</p>
          <span>{timeLeft.seconds}</span>
        </div>
      </div>
    </div>
        <h1>Today's</h1>
        <h2><br/> Flash Sales</h2>
      </div>
        <button className="nav-btn left-btn" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="nav-btn right-btn" onClick={handleNext}>
          &#8250;
        </button>
      <div className="slider-container">
        <div className="slider">
          {cards.slice(flashIndex, flashIndex + 4).map((product, index) => (
            <div key={product.id} className="card">
              <div className="discount">{product.discount}</div>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">
                <span>{product.price}</span>{" "}
               <span className="original-price">{product.originalPrice}</span>
              </p>
              <div className="stars">
                {Array(5).fill(0).map((_, index) => (
                  <span key={index} className={index < product.rating ? "star filled" : "star"}>
                    ★
                  </span>
                ))}
                <span className="rating-percentage">({product.ratingPercentage})</span>
              </div>
              <div className="button-container">
            <button
              className="btn add-to-cart"
              onClick={() => alert(`"${product.title}" added to cart!`)}
            >
              Add to Cart
            </button>
            <button
              className="btn buy-now"
              onClick={() => alert(`"${product.title}" purchased successfully!`)}
            >
              Buy Now
            </button>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-products-container">
      <div className="ViewallProducts">
        <button onClick={handleClick}>View All Products</button>
      </div>
      {showMessage && (
        <div className="message-box">
          <p>🎉 All products are now available! Browse your favorites today! 🚀</p>
        </div>
      )}
    </div>
      </div>
    </div> 
    </>
  );
}
