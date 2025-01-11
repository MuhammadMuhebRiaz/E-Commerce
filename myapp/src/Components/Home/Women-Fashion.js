import React from 'react';
import '../../App.css';
import {useCart} from "react-use-cart";
import Sidebar from "./Sidebar" ;
import { Route, Routes } from "react-router-dom";
import HomeData from "./HomeData";


const WomenFashion = () => {
const { addItem } = useCart();


  return (
    <>
      <div className='women-fashion'>  
        {/* Sidebar */}
      <Routes>
              <Route path="*" element={<Sidebar/>} />
      </Routes>
        <div className="women-fashion-container">
          <h1>Women's Fashion</h1>
          <div className="product-grid">
            {HomeData.productData3.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} className="product-image" />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <button className="add-cart-btn" onClick={() => addItem(product )}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>  
    </>
  );
};

export default WomenFashion;
