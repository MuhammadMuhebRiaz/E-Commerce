import React from "react";
import "../../App.css";
import HomeData from "./HomeData";
import { useNavigate } from "react-router-dom";

export default function NewArrival() {
  const navigate = useNavigate();
  return (
    <div className="NewArrival">
      <div className="featured">
        <p>Featured</p>
        <h1>New Arrival</h1>
      </div>
      <div className="NewArrival-Container">
        {HomeData.NewArrival.map((item) => (
          <div key={item.id} className={`NewArrival-Card ${item.size}`}>
            <img 
            src={item.image} 
            alt={item.title}  
            onClick={() =>
              navigate(`/product/${item.id}`, {
                state: { product: item },
              })
            }
            />
            <div className="NewArrival-Info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href="/women-fashion"><button>Shop Now</button></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
