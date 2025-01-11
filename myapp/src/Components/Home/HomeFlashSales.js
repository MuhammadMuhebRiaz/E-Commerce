import React, { useState, useEffect } from "react";
import '../../App.css'
import {useCart} from "react-use-cart";
import HomeData from "./HomeData";

export default function FlashSales() {

const { addItem } = useCart();

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
  const [flashIndex, setFlashIndex] = useState(0);
  
  const handlePrev = () => {
    setFlashIndex((prevIndex) =>
      prevIndex === 0 ? HomeData.productData2.length- 4 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setFlashIndex((prevIndex) =>
      prevIndex === HomeData.productData2.length - 4 ? 0 : prevIndex + 1
    );
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
        {HomeData.productData2.slice(flashIndex, flashIndex + 4).map((item) => (
                  <div key={item.id} className="card explorecard">
                    {item.isNew && <span className="new">New</span>}
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p className="price"><span>{item.price}</span>{" "}</p>
                    <div className="stars">
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <span key={index} className={index < item.rating ? "star filled" : "star"}>★</span>
                        ))}
                      <span className="rating-percentage">({item.ratingPercentage})</span>
                    </div>
                    <div className="button-container">
                    <button className="btn add-to-cart" onClick={() => addItem(item )}>Add to cart</button>
                    <button className="btn buy-now">Buy Now </button>
                    </div>
                  </div>
          ))}
        </div>
        <div className="view-all-products-container">
          <div className="ViewallProducts">
            <button>View All Products</button>
          </div>
        </div>
      </div>
    </div>
  )
}