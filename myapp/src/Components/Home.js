import React from "react";
import "./home.css";
import FlashSales from './Home/HomeFlashSales';
import Browse from './Home/HomeBrowse';
import SidebarCategories from './Home/HomeSidebarCategories';
import AboutFeatures from "./About/AboutFeatures";
import HomeBestSellingProducts from './Home/HomeBestSellingProducts'
import MusicPromo from './Home/HomeMusicProma';
import ExploreOurProducts from './Home/HomeExploreOurProducts';
import NewArrival from "./Home/HomeNewArrival";



export default function Home() {


return (
  <>
    <div>
      <SidebarCategories/>
    </div>
    <div>
      <FlashSales/>
    </div>
    <div>
      <Browse/>
    </div>
    <div>
      <HomeBestSellingProducts/>
    </div>
    <div>
      <MusicPromo/>
    </div>
    <div>
    <ExploreOurProducts/>
    </div>
    <div>
      <NewArrival/>
    </div>
    <div className="Features">
      <AboutFeatures/>
    </div>
  </>
);
}
