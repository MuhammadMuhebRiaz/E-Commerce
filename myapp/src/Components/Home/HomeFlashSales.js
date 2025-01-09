import React, { useState, useEffect } from "react";
import '../../App.css'
import img2 from "../images/Frame 611.png"
import img3 from "../images/KeybordCartSmall.jpg"
import img4 from "../images/IPS LCD.png"
import img5 from "../images/Frame 614.png"
export default function FlashSales() {
  
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
    setTimeout(() => setShowMessage(false), 5000);
  };
  return (
    <div className="flash-sales">
      <div className="flash_header">
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
             <br/>
        <h2>Flash Sales</h2>
      </div>
      <button className="nav-btn left-btn" onClick={handlePrev}> {"<"} </button>
      <button className="nav-btn right-btn" onClick={handleNext}> {">"} </button>
      <div className="slider-container">
        <div className="slider">
          {cards.slice(flashIndex, flashIndex + 4).map((product) => (
            <div key={product.id} className="card">
              <div className="discount">{product.discount}</div>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">
                <span>{product.price}</span>{" "}
                <span className="original-price">{product.originalPrice}</span>
              </p>
              <div className="stars">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <span key={index} className={index < product.rating ? "star filled" : "star"}>★ </span>
                ))}
                <span className="rating-percentage">({product.ratingPercentage})</span>
              </div>
              <div className="button-container">
                <button className="btn add-to-cart" onClick={() => alert(`"${product.title}" added to card!`)}>Add to card </button>
                <button className="btn buy-now" onClick={() => alert(`"${product.title}" purchased successfully!`)}>Buy Now</button>
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
  )
}