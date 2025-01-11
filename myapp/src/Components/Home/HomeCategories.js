import React, { useState, useEffect } from "react";
import "../../App.css";
import Sidebar from "./Sidebar" ;
import { Route, Routes } from "react-router-dom";

import logo from "../images/1200px-Apple_gray_logo 1.png";
import img1 from "../images/Iphone14.jpg";

export default function HomeSidebarCategories() {
  const slides = [
    { id: 1, image: img1, title: "iPhone 14 Series", discount: "10%" },
    { id: 2, image: img1, title: "iPhone 14 Series", discount: "15%" },
    { id: 3, image: img1, title: "iPhone 14 Series", discount: "20%" },
    { id: 4, image: img1, title: "iPhone 14 Series", discount: "25%" },
    { id: 5, image: img1, title: "iPhone 14 Series", discount: "30%" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="home-container">
      {/* Sidebar */}
      <Routes>
              <Route path="*" element={<Sidebar/>} />
      </Routes>
      {/* Main Banner */}
      <div className="main-banner">
        <div className="banner-content">
          <img src={logo} alt="Apple Logo" className="apple-logo" />
          <h2>{slides[currentIndex]?.title || "Loading..."}</h2>
          <p>
            Up to {slides[currentIndex]?.discount || "0%"} <br /> off Voucher
          </p>
          <a href="#" className="shop-now-btn">
            Shop Now <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <img
          src={slides[currentIndex]?.image || ""}
          alt={slides[currentIndex]?.title || "Banner"}
          className="banner-image"
        />
        {/* Dots Navigation */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Slide ${index + 1}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
