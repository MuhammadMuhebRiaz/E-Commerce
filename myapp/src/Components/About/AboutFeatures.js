import React from 'react'
import '../../App.css'
import img1 from "../images/fastdelivery.png";
import img2 from "../images/money.png";
import img3 from "../images/support.png";

export default function AboutFeatures() {
  return (
    <div>
        <section className="features"> 
            <div> 
                <img src={img1} alt="Fast Delivery" /> <br /> 
                <h1>Free and Fast Delivery</h1> 
                <p>Free delivery for all orders over $140</p> 
            </div>
            <div> 
                <img src={img2} alt="Customer Support" /> <br /> 
                <h1>24/7 Customer Service</h1> 
                <p>Friendly 24/7 customer support</p> 
                </div> 
                <div> <img src={img3} alt="Money Back Guarantee" /> <br /> 
                <h1>Money Back Guarantee</h1> 
                <p>We return money within 30 days</p> 
            </div>
        </section>
    </div>
  )
}
