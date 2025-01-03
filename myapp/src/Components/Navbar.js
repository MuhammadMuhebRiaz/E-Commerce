import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../index.css";
import './i18n';

function Navbar() {
  const { t, i18n } = useTranslation();

  // Handle language change
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="main_navbar">
        <h3>{t('sale_offer')}</h3>
        <Link to="/home" className="shop-now-link">{t('shop_now')}</Link>
        <div className="language-selector">
          <select
            className="form-select"
            aria-label="Language select"
            onChange={handleLanguageChange}
            value={i18n.language} // Set the default selected language
          >
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
          {/* Logo */}
          <div className="logo">
            <h1>{t('brand_name')}</h1>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul>
              <NavLink to="/home" activeClassName="active">{t('home')}</NavLink>
              <NavLink to="/contact" activeClassName="active">{t('contact')}</NavLink>
              <NavLink to="/about" activeClassName="active">{t('about')}</NavLink>
              <NavLink to="/signup" activeClassName="active">{t('signup')}</NavLink>
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="search">
            <input
              type="text"
              placeholder={t('search_placeholder')}
              aria-label={t('search_placeholder')}
            />
            <i className="fas fa-search" aria-hidden="true"></i>
          </div>

          {/* Icons */}
          <div className="nav-icons">
            <Link className="link-i" to="/"><i className="fa-regular fa-heart"></i></Link>
            <Link className="link-i" to="/ShoppingCart"><i className="fas fa-shopping-cart"></i></Link>
            <Link className="link-i" to="/MyAccount"><i className="fa-regular fa-user"></i></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
