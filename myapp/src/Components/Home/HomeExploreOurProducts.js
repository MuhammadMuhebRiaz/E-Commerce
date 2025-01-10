import React, { useState} from "react";
import "../../App.css";
import {useCart} from "react-use-cart";
import HomeData from "./HomeData";


export default function ExploreOurProducts() {
  const { addItem } = useCart();
  const [ExploreIndex, setExploreIndex] = useState(0);
  
  const handlePrev = () => {
    setExploreIndex((prevIndex) =>
      prevIndex === 0 ? HomeData.productData.length - 4 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setExploreIndex((prevIndex) =>
      prevIndex === HomeData.productData.length - 4 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="ExploreOurProducts">
      <div className="Explore_header">
        <h1>Our Products</h1>
        <h2>Explore Our Products</h2>
      </div>
      <button className="nav-btn left-btn" onClick={handlePrev}> {"<"} </button>
      <button className="nav-btn right-btn" onClick={handleNext}> {">"} </button>
      <div className="slider-container">
        <div className="slider">
          {HomeData.productData.slice(ExploreIndex, ExploreIndex + 4).map((item) => (
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
                <button className="btn add-to-cart" onClick={() => addItem(item)}>Add to card</button>
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