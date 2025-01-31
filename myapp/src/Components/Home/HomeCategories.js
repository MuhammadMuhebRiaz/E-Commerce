import React, { useState, useEffect } from "react";
import "../../App.css";
import Sidebar from "./Sidebar";
import { useNavigate, Route, Routes } from "react-router-dom";

export default function HomeSidebarCategories() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slider, setSlider] = useState([]);

  // Fetch slider data
  useEffect(() => {
    fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/slides.json")
      .then((response) => {
        response.json().then((result) => {
          setSlider(result);
        });
      });
  }, []);

  // Auto slider
  useEffect(() => {
    if (!slider || slider.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slider.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slider]);

  // Dot click handler
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="home-container">
      {/* Sidebar */}
      <Routes>
        <Route path="*" element={<Sidebar />} />
      </Routes>

      {/* Main Banner */}
      <div className="main-banner">
        <div className="banner-content">
          {slider.length > 0 && (
            <div>
              <img
                src={`/images/${slider[currentIndex].logo}` || ""}
                alt="Logo"
                className="apple-logo"
              />
              <h2>{slider[currentIndex]?.title || "Special Offers"}</h2>
              <p>
                Up to {slider[currentIndex]?.discount || "0%"} <br /> off Voucher
              </p>
              <a href="/Electronics" className="shop-now-btn">
                Shop Now <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          )}
        </div>

        {slider.length > 0 && (
          <img
            src={`/images/${slider[currentIndex].image}` || ""}
            alt={slider[currentIndex]?.title || "Banner"}
            className="banner-image"
            onClick={() =>
              navigate(`/product/${slider[currentIndex]?.id}`, {
                state: { product: slider[currentIndex] },
              })
            }
          />
        )}

        {/* Dots Navigation */}
        <div className="dots">
          {Array.isArray(slider) &&
            slider.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Slide ${index + 1}`}
              ></span>
            ))}
        </div>
      </div>
    </div>
  );
}
