import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../index.css";

function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="main_navbar">
        <h3>{('Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!')}</h3>
        <Link to="/home" className="shop-now-link">{('shop_now')}</Link>
        <div className="language-selector">
          <select className="form-select" aria-label="Language select">
            <option value="en">English</option>
            <option value="es">Español - ES</option>
            <option value="ar">العربية - AR</option>
            <option value="de">Deutsch - DE</option>
            <option value="he">עברית - HE</option>
            <option value="ko">한국어 - KO</option>
            <option value="pt">Português - PT</option>
            <option value="zh">中文 (简体) - ZH</option>
            <option value="zh-tw">中文 (繁體) - ZH</option>
            <option value="fr">Français - FR</option>
          </select>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="s_navbar">
        <div className="navbar">
          <div className="logo">
            <h1>{('Exclusive')}</h1>
          </div>
          <nav>
            <ul>
              <NavLink to="/home" activeClassName="active">{('Home')}</NavLink>
              <NavLink to="/contact" activeClassName="active">{('Contact')}</NavLink>
              <NavLink to="/about" activeClassName="active">{('About')}</NavLink>
              <NavLink to="/signup" activeClassName="active">{('Signup')}</NavLink>
            </ul>
          </nav>
          <div className="search">
            <input type="text" placeholder={('What are you looking for?')} aria-label={('search_placeholder')} />
            <i className="fas fa-search" aria-hidden="true"></i>
          </div>
          <div className="nav-icons">
            <Link className="link-i" to="/Wishlist"><i className="fa-regular fa-heart"></i></Link>
            <Link className="link-i" to="/ShoppingCart"><i className="fas fa-shopping-cart"></i></Link>
            <Link className="link-i" to="/MyAccount"><i className="fa-regular fa-user"></i></Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
