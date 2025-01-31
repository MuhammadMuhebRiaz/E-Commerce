import React, { useState, useEffect } from "react";
import '../../App.css';
import img1 from "../images/category-cellPhone.png"
import img2 from "../images/category-computer.png"
import img3 from "../images/category-smartWatch.png"
import img4 from "../images/category-camera.png"
import img5 from "../images/category-headphone.png"
import img6 from "../images/category-gamepad.png"

export default function HomeBrowse() {

  const categories = [
    { name: "Phones", icon: img1 },
    { name: "Computers", icon: img2 },
    { name: "SmartWatch", icon: img3 },
    { name: "Camera", icon: img4 },
    { name: "HeadPhones", icon: img5 },
    { name: "Gaming", icon: img6 },
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
    <div className="browse-container">
      <h3>Categories</h3>
      <h2>Browse By Category</h2>
      <button className="slider-btn browse-left" onClick={BrowsehandleNext}>{"<"}</button>
      <button className="slider-btn browse-right" onClick={BrowsehandlePrev}>{">"}</button>
      <div className="category-slider">
        <div className="categories">
          {categories.slice(BrowseIndex, BrowseIndex + 4).map((cat) => (
            <div key={cat.name} className={`category-item ${ selectedCategory === cat.name ? "selected" : "" }`} onClick={() => handleCategoryClick(cat.name)} >
              <img  src={cat.icon} alt={cat.name} className="category-icon" />
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}