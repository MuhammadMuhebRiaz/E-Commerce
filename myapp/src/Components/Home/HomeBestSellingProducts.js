import React from "react";
import "../../App.css";
import img1 from "../images/Frame 605.png"
import img2 from "../images/Frame 606.png"
import img3 from "../images/Frame 610.png"
import img4 from "../images/Frame 612.png"


export default function BestSellingProducts(){
  const products = [
    {
      name: "The north coat",
      price: "$260",
      oldPrice: "$360",
      rating: 5,
      reviews: 99,
      image:img1,
    },
    {
      name: "Gucci duffle bag",
      price: "$960",
      oldPrice: "$1160",
      rating: 4,
      reviews: 75,
      image: img2,
    },
    {
      name: "RGB liquid CPU Cooler",
      price: "$160",
      oldPrice: "$170",
      rating: 3,
      reviews:55,
      image:img3,
    },
    {
      name: "Small BookShelf",
      price: "$360",
      rating:2,
      reviews:45,
      image: img4,
    },
  ];

  return (
    <div className="best-selling-products">
      <div className="header">
        <h4>This Month</h4>
        <h2>Best Selling Products</h2>
        <button className="view-all-button">View All</button>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <div className="actions">
                <button className="likebtn">♥</button>
                <button className="eyebtn">👁</button>
              </div>
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p className="price">{product.price} <span className="old-price">{product.oldPrice}</span></p>
            <p className="rating"></p>
            <div className="productstars">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span key={index} className={index < product.rating ? "star filled" : "star"} >★</span>
              ))}
              <span className="rating-percentage">({product.reviews} reviews)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};