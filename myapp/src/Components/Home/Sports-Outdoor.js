import React, { useState ,useEffect} from "react";
import '../../App.css';
import { useCart } from "react-use-cart";
import Sidebar from "./Sidebar" ;
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SportsOutdoor() {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [sportsoutdoor, setSportsoutdoor] = useState([]);
  useEffect(()=>{
          fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/sportsoutdoor.json")
          .then((response) =>{
            response.json().then((result) => {
              setSportsoutdoor(result);
            })
          })
        });


  const renderStars = (rating) => {
    const totalStars = 5;
    let filledStars = Math.round(rating);
    let emptyStars = totalStars - filledStars;
    return (
      <>
        {"★".repeat(filledStars)}{"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <>
      <div className='home-sidber'>  
        {/* Sidebar */}
      <Routes>
              <Route path="*" element={<Sidebar/>} />
      </Routes>
        <div className="home-sidber-container">
          <h1>Sports & Outdoor</h1>
          <div className="product-grid">
            {sportsoutdoor.map((product) => (
              <div key={product.id} className="product-card">
                <img src={`/images/${product.image}` || ""} alt={product.title} className="product-image"
                 onClick={() =>
                  navigate(`/product/${product.id}`, { state: { product: product } })
                }
                />
                <div className='cardcontant'>
                  <h3>{product.title}</h3>
                  <p className='price'>${product.price}</p>
                  <p className="rating">
                    {renderStars(product.rating)}
                    <span>
                      ({product.ratingPercentage || "No"} Reviews)
                    </span>
                  </p>
                  <p>{product.category}</p>
                  <button className="add-cart-btn" onClick={() => addItem(product )}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>  
    </>
  );
};