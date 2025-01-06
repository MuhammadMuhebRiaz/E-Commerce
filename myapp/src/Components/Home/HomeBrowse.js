import React, { useState, useEffect } from "react";
import "../home.css";

import img6 from "../images/Category-CellPhone.png"
import img7 from "../images/Category-Computer.png"
import img8 from "../images/Category-SmartWatch.png"
import img9 from "../images/Category-Camera.png"
import img10 from "../images/Category-Headphone.png"
import img11 from "../images/Category-Gamepad.png"

export default function HomeBrowse() {
    // BrowseByCategory
    const categories = [
      { name: "Phones", icon: img6 },
      { name: "Computers", icon: img7 },
      { name: "SmartWatch", icon: img8 },
      { name: "Camera", icon: img9 },
      { name: "HeadPhones", icon: img10 },
      { name: "Gaming", icon: img11 },
    ];
    const [selectedCategory, setSelectedCategory] = useState("Camera");
    
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
    const [BrowseIndex, setBrowseIndex] = useState(0);
    
    const BrowsehandlePrev = () => {
      setBrowseIndex((prevIndex) =>
        prevIndex === 0 ? categories.length - 4 : prevIndex - 1
      );
    };
    
    const BrowsehandleNext = () => {
      setBrowseIndex((prevIndex) =>
        prevIndex === categories.length - 4 ? 0 : prevIndex + 1
      );
    };
  return (
    <div>
          <div className="browse-container">
    <h3>Categories</h3>
    <h2>Browse By Category</h2>
      <button className="slider-btn browse-left" onClick={BrowsehandleNext}>{"<"}</button>
      <button className="slider-btn browse-right" onClick={BrowsehandlePrev}>{">"}</button>
    <div className="category-slider">
      <div className="categories">
        {categories.slice(BrowseIndex, BrowseIndex + 4).map((cat) => (
          <div
            key={cat.name}
            className={`category-item ${
              selectedCategory === cat.name ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <img src={cat.icon} alt={cat.name} className="category-icon" />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
    </div>
  )
}
