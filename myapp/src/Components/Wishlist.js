import React from 'react';
import '../index.css';
import {useCart} from "react-use-cart";
import HomeData from "../Components/Home/HomeData";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  
  const { addItem } = useCart();
  const navigate = useNavigate(); 

  return (
    <div className="wishlist-container">
      <h2>Wishlist (4)</h2>
      <button className="move-all-btn">Move All To Bag</button>
      <div className="wishlist-items">
        {HomeData.productData.map((item) => (
          <div key={item.id} className="wishlist-item">
            <div className="wishlist-item-actions">
              {item.discount && <span className="discount">-{item.discount}%</span>}
            <img 
            src={item.image} 
            alt={item.title} 
            className="item-image" 
            onClick={() =>
              navigate(`/product/${item.id}`, {
                state: { product: item },
              })
            }
            />
            <button className="add-to-cart-btn" onClick={() => addItem(item )}>Add to Cart</button>
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>
                ${item.price} {item.originalPrice && <span className="original-price">${item.originalPrice}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className='just'>Just For You</h2>
      <div className="see-all-container">
        <button className="see-all-btn">See All</button>
      </div>
      <div className="just-for-you-items">
        {HomeData.productData2.map((item) => (
          <div key={item.id} className="just-for-you-item">
            <div className="wishlist-item-actions">
              {item.discount && <span className="discount">-{item.discount}</span>}
            <img 
            src={item.image} 
            alt={item.title} 
            className="item-image  item-img" 
            onClick={() =>
              navigate(`/product/${item.id}`, {
                state: { product: item },
              })
            }
            /> 
            <button className="add-to-cart-btn" onClick={() => addItem(item )}>Add to Cart</button>
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              {item.rating && <span className="rating"><i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> {item.rating}%</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

