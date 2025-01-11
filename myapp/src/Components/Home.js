import React from "react";
import "../App.css";
import FlashSales from "./Home/HomeFlashSales";
import Browse from "./Home/HomeBrowse";
import Categories from "./Home/HomeCategories";
import AboutFeatures from "./About/AboutFeatures";
import HomeBestSellingProducts from "./Home/HomeBestSellingProducts";
import MusicPromo from "./Home/HomeMusicProma";
import ExploreOurProducts from "./Home/HomeExploreOurProducts";
import NewArrival from "./Home/HomeNewArrival";

export default function Home() {
  return (
    <div>
      {/* Static Components */}
      <Categories />
      <FlashSales />
      <Browse />
      <HomeBestSellingProducts />
      <MusicPromo />
      <ExploreOurProducts />
      <NewArrival />
      <div className="Features">
        <AboutFeatures />
      </div>
    </div>
  );
}
