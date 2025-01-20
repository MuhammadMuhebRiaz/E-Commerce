import React, { useState } from "react";
import "../../App.css";
import HomeData from "./HomeData";
import { useNavigate } from "react-router-dom";

export default function BestSellingProducts({ title }) {
  const navigate = useNavigate();
  const [viewCount, setViewCount] = useState(4);


  const handleViewMore = () => {
    setViewCount(HomeData.productData2.length);
  };

  const handleClose = () => {
    setViewCount(4);
  };

  return (
    <div className="best-selling-products">
      <div className="header">
        <h4>This Month</h4>
        <h2>{title || "Best Selling Product"}</h2>
        {viewCount < HomeData.productData2.length ? (
          <div>
            <button className="view-all-button" onClick={handleViewMore}>
              View All
            </button>
          </div>
        ) : (
          <div>
            <button className="view-all-button" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>

      <div className="product-grid">
        {HomeData?.BestSellingProducts?.length ? (
          HomeData.BestSellingProducts.slice(0, viewCount).map((product, index) => (
            <div className="product-card" key={index}>
              <div
                className="product-image"
                onClick={() =>
                  navigate(`/product/${product.id}`, { state: { product: product } })
                }
              >
                <div className="actions">
                  <button className="likebtn">♥</button>
                  <button className="eyebtn">👁</button>
                </div>
                <img src={product.image} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <p className="price">
                ${product.price} <span className="old-price">${product.oldPrice}</span>
              </p>
              <div className="productstars">
                <span>★★★★★</span>
                <span className="rating-percentage">({product.reviews} reviews)</span>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
