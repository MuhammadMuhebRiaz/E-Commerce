import React from 'react'
import { Link } from "react-router-dom";
import "../../App.css";

export default function Sidebar() {
  return (
        <div className="sidebar">
          <ul>
            <li><Link to="/Women-Fashion" activeClassName="active">Women's Fashion</Link></li>
            <li><Link to="/mens-fashion">Men's Fashion</Link></li>
            <li><Link to="/electronics">Electronics</Link></li>
            <li><Link to="/home-lifestyle">Home & Lifestyle</Link></li>
            <li><Link to="/medicine">Medicine</Link></li>
            <li><Link to="/sports-outdoor">Sports & Outdoor</Link></li>
            <li><Link to="/baby-toys">Baby's & Toys</Link></li>
            <li><Link to="/groceries-pets">Groceries & Pets</Link></li>
            <li><Link to="/health-beauty">Health & Beauty</Link></li>
          </ul>
        </div>
  )
}
