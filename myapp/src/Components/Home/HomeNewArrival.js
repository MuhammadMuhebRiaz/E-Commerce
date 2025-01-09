import React from "react";
import "../../App.css";
import img1 from "../images/ps5-slim-goedkope-playstation_large 1.png";
import img2 from "../images/woman-wearing-hat.png";
import img3 from "../images/Speakers.png";
import img4 from "../images/Perfume.png";

export default function NewArrival() {
  return (
    <div className="NewArrival">
      <div className="featured">
        <p >Featured</p>
        <h1 >New Arrival</h1>
      </div>
      <div className="NewArrival-Container">
        <div className="NewArrival-Card large">
          <img src={img1} alt="PlayStation 5" />
          <div className="NewArrival-Info">
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <button>Shop Now</button>
          </div>
        </div>

        <div className="NewArrival-Card small">
          <img src={img2} alt="Women's Collections" />
          <div className="NewArrival-Info">
            <h2>Women's Collections</h2>
            <p>Featured women collections that give you another vibe.</p>
            <button>Shop Now</button>
          </div>
        </div>

        <div className="NewArrival-Card small">
          <img src={img3} alt="Speakers" className="Speakers" />
          <div className="NewArrival-Info">
            <h2>Speakers</h2>
            <p>Amazon wireless speakers</p>
            <button>Shop Now</button>
          </div>
        </div>

        <div className="NewArrival-Card small">
          <img src={img4} alt="Perfume" className="Perfume" />
          <div className="NewArrival-Info">
            <h2>Perfume</h2>
            <p>GUCCI INTENSE OUD EDP</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};