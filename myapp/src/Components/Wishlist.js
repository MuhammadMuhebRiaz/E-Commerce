import React from 'react';
import '../index.css';
import img1 from './images/Frame 606.png';
import img2 from './images/Frame 610.png';
import img3 from './images/Frame 608 (1).png';
import img4 from './images/Quilted.png';
import img5 from './images/Laptop.png';
import img6 from './images/MonitorCartSmall.png';
import img7 from './images/GamepadCartSmall.png';
import img8 from './images/KeybordCartSmall.jpg';
import {useCart} from "react-use-cart";
import HomeData from "../Components/Home/HomeData";

export default function Wishlist() {

    const { addItem } = useCart();

  const wishlistItems = [
    { id: 1, title: 'Gucci duffle bag', price:960, originalPrice: 1160, discount: 35, image: img1 },
    { id: 2, title: 'RGB Liquid CPU Cooler', price: 1960, image: img2 },
    { id: 3, title: 'GP11 Shooter USB Gamepad', price: 550, image: img3 },
    { id: 4, title: 'Quilted Satin Jacket', price: 750, image: img4 },
  ];

  return (
    <div className="wishlist-container">
      <h2>Wishlist (4)</h2>
      <button className="move-all-btn">Move All To Bag</button>
      <div className="wishlist-items">
        {HomeData.productData.map((item) => (
          <div key={item.id} className="wishlist-item">
            <div className="wishlist-item-actions">
              {item.discount && <span className="discount">-{item.discount}%</span>}
            <img src={item.image} alt={item.title} className="item-image" />
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
            <img src={item.image} alt={item.title} className="item-image  item-img" /> 
            <button className="add-to-cart-btn" onClick={() => addItem(item )}>Add to Cart</button>
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              {item.rating && <span className="rating"><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> {item.rating}%</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

