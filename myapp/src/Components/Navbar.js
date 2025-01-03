import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../index.css";
import "../i18n";

function Navbar() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value); // Change language
  };

  return (
    <>
      <div className="main_navbar">
        <h3>{t('sale_offer')}</h3>
        <Link to="/home">{t('shop_now')}</Link>
        <div className="second_navbar">
          <select
            className="form-select"
            aria-label="Language select"
            onChange={handleLanguageChange}
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
      <div className="s_navbar">
        <div className="navbar">
          <div className="logo">
            <h1>{t('brand_name')}</h1>
          </div>
          <nav>
            <ul>
              <Link to="/home">{t('home')}</Link>
              <Link to="/contact">{t('contact')}</Link>
              <Link to="/about">{t('about')}</Link>
              <Link to="/signup">{t('signup')}</Link>
            </ul>
          </nav>
          <div className="search">
            <input type="text" placeholder={t('search_placeholder')} />
            <i className="fas fa-search"></i>
          </div>
          <Link className="link-i" to="/"><i className="fa-regular fa-heart"></i></Link>
          <Link className="link-i" to="/ShoppingCart"><i className="fas fa-shopping-cart"></i></Link>
          <Link className="link-i" to="/MyAccount"><i className="fa-regular fa-user"></i></Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
