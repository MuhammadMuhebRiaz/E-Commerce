import React from "react";
import "./home.css";
import FlashSales from './Home/HomeFlashSales';
import Browse from './Home/HomeBrowse';
import SidebarCategories from './Home/HomeSidebarCategories';
import AboutFeatures from "./About/AboutFeatures";
import HomeBestSellingProducts from './Home/HomeBestSellingProducts'
import MusicPromo from './Home/HomeMusicProma';
import ExploreOurProducts from './Home/HomeExploreOurProducts';


import img25 from "./images/ps5-slim-goedkope-playstation_large 1.png"
import img26 from "./images/woman-wearing-hat.png"
import img27 from "./images/Speakers.png"
import img28 from "./images/Perfume.png"
import img29 from "./images/fastdelivery.png"
import img30 from "./images/support.png"
import img31 from "./images/money.png"


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
    <div className="Features">
      <AboutFeatures/>
    </div>
  </>
);
}
