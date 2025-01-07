import React, { useState} from "react";
import "../home.css";
import img1 from "../images/Frame 604.png"
import img2 from "../images/Frame 604 (1).png"
import img3 from "../images/Frame 604 (2).png"
import img4 from "../images/Curology product set.png"
import img5 from "../images/Frame 608 (3).png"
import img6 from "../images/Frame 608 (2).png"
import img7 from "../images/Frame 608 (1).png"
import img8 from "../images/Quilted.png"


export default function FlashSales() {
    
    const cards = [
      { id: 1, image: img1, title: "Breed Dry Dog Food", price: "$100", rating: 4 , ratingPercentage: 35},
      { id: 2, image: img2, title: "CANON EOS DSLR Camera", price: "$360", rating: 4 , ratingPercentage: 95},
      { id: 3, image: img3, title: "ASUS FHD Gaming Laptop ", price: "$700", rating: 5 , ratingPercentage: 325},
      { id: 4, image: img4, title: "Curology Product Set ", price: "$500", rating: 4 , ratingPercentage: 145},
      { id: 5, image: img5, title: "Kids Electric Car", isNew: true, price: "$960", rating: 5 , ratingPercentage: 65},
      { id: 6, image: img6, title: "Jr. Zoom Soccer Cleats", price: "$1160", rating: 5 , ratingPercentage: 35},
      { id: 7, image: img7, title: "GP11 Shooter USB Gamepad", isNew: true, price: "$660", rating: 4.5 , ratingPercentage: 55},
      { id: 8, image: img8, title: "Quilted Satin Jacket",  price: "$660", rating: 4.5 , ratingPercentage: 55},
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
    <>
          <div className="flash-sales">
      <div className="flash_header">
        <h1>Our Products</h1>
        <h2>Explore Our Products</h2>
      </div>
      <button className="nav-btn left-btn" onClick={handlePrev}> {"<"} </button>
      <button className="nav-btn right-btn" onClick={handleNext}> {">"} </button>
      <div className="slider-container">
        <div className="slider">
          {cards.slice(flashIndex, flashIndex + 4).map((product) => (
              <div key={product.id} className="card explorecard">
              {product.isNew && <span className="new">New</span>}
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">
                <span>{product.price}</span>{" "}
              </p>
              <div className="stars">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <span
                      key={index}
                      className={index < product.rating ? "star filled" : "star"}
                    >
                      ★
                    </span>
                  ))}
                <span className="rating-percentage">({product.ratingPercentage})</span>
              </div>
              <div className="button-container">
                <button
                  className="btn add-to-cart"
                  onClick={() => alert(`"${product.title}" added to card!`)}
                >
                  Add to card
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
  )
}
