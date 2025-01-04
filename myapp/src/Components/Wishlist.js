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

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: 'Gucci duffle bag', price: 960, originalPrice: 1160, discount: 35, image: img1 },
    { id: 2, name: 'RGB Liquid CPU Cooler', price: 1960, image: img2 },
    { id: 3, name: 'GP11 Shooter USB Gamepad', price: 550, image: img3 },
    { id: 4, name: 'Quilted Satin Jacket', price: 750, image: img4 },
  ];

  const justForYouItems = [
    { id: 1, name: 'ASUS FHD Gaming Laptop', price: 960, originalPrice: 1160, discount: 35, rating: 65, image: img5 },
    { id: 2, name: 'IPS LCD Gaming Monitor', price: 1160, rating: 65, image: img6 },
    { id: 3, name: 'HAVIT HV-G92 Gamepad', price: 560, rating: 65, isNew: true, image: img7 },
    { id: 4, name: 'AK-900 Wired Keyboard', price: 200, rating: 65, image: img8 },
  ];

  return (
    <div className="wishlist-container">
      <h2>Wishlist (4)</h2>
      <button className="move-all-btn">Move All To Bag</button>
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item">
            <div className="wishlist-item-actions">
              {item.discount && <span className="discount">-{item.discount}%</span>}
            <img src={item.image} alt={item.name} className="item-image" />
            <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
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
        {justForYouItems.map((item) => (
          <div key={item.id} className="just-for-you-item">
            <div className="wishlist-item-actions">
              {item.discount && <span className="discount">-{item.discount}%</span>}
              {item.isNew && <span className="new">New</span>}
            <img src={item.image} alt={item.name} className="item-image  item-img" />
              
            <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              {item.rating && <span className="rating"><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> {item.rating}%</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
