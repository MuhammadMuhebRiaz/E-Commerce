import React from "react";
import "./home.css";
import FlashSales from './Home/HomeFlashSales';
import Browse from './Home/HomeBrowse';
import SidebarCategories from './Home/HomeSidebarCategories';


import img12 from "./images/Frame 605.png"
import img13 from "./images/Frame 606.png"
import img14 from "./images/Frame 610.png"
import img15 from "./images/Frame 612.png"
import img16 from "./images/Frame 694.png"
import img17 from "./images/Frame 604.png"
import img18 from "./images/Frame 604 (1).png"
import img19 from "./images/Frame 604 (2).png"
import img20 from "./images/Curology product set.png"
import img21 from "./images/Frame 608 (3).png"
import img22 from "./images/Frame 608 (2).png"
import img23 from "./images/Frame 608 (1).png"
import img24 from "./images/Quilted.png"
import img25 from "./images/ps5-slim-goedkope-playstation_large 1.png"
import img26 from "./images/woman-wearing-hat.png"
import img27 from "./images/Speakers.png"
import img28 from "./images/Perfume.png"
import img29 from "./images/fastdelivery.png"
import img30 from "./images/support.png"
import img31 from "./images/money.png"
import AboutFeatures from "./About/AboutFeatures";


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
    <div className="Features">
      <AboutFeatures/>
    </div>

  </>
);
}
