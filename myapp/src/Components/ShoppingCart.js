import React, { useState } from "react";
import "../index.css";
import img1 from "./images/MonitorCartSmall.png";
import img2 from "./images/GamepadCartSmall.png";
function Cart() {

    const [couponCode, setCouponCode] = useState("");
  
    const handleApplyCoupon = () => {
      if (couponCode) {
        alert(`Coupon "${couponCode}" applied!`);
      } else {
        alert("Please enter a coupon code.");
      }
    };
  
    const handleProceedToCheckout = () => {
      alert("Proceeding to checkout...");
    };

  return (
    <div className="cart-page">

      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="cart-item1">
              <td>
                <img src={img1} alt="IPS LCD" />
                <span>LCD Monitor</span>
              </td>
              <td>$650</td>
              <td>
                <input type="number" defaultValue="1" min="1" />
              </td>
              <td>$650</td>
            </tr>
            <tr className="cart-item2">
              <td>
              <img src={img2} alt="IPS LCD" />
              <span>H1 Gamepad</span>
              </td>
              <td>$550</td>
              <td>
                <input type="number" defaultValue="2" min="1" />
              </td>
              <td>$1100</td>
            </tr>
          </tbody>
        </table>
        <div className="cart-actions">
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>
        <div className="cart-summary">
        <div className="container">
        <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)}/>
            <button className="button" id="applyCoupon" onClick={handleApplyCoupon}>Apply Coupon</button>
        </div>
        <div className="cart-total">
            <h3>Cart Total</h3>
            <p><span>Subtotal</span> <span>$1750</span></p>
            <p><span>Shipping</span> <span>Free</span></p>
            <p className="total"><span>Total</span> <span>$1750</span></p>
            <button className="button" id="proceedToCheckout" onClick={handleProceedToCheckout}>Proceed to Checkout</button>        
            </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
