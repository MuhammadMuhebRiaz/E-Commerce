import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footersection'; 
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import About from './Components/About';
import ErrorPage from './Components/ErrorPage';
import Login from './Components/Login';
import ShoppingCart from './Components/ShoppingCart';
import MyAccount from './Components/MyAccount';
import Wishlist from './Components/Wishlist';

import { CartProvider } from "react-use-cart";

import WomenFashion from "./Components/Home/Women-Fashion";
import MenFashion from './Components/Home/Men-Fashion';
import Electronics from './Components/Home/Electronics';
import HomeLifestyle from './Components/Home/Home-Lifestyle';
import Medicine from './Components/Home/Medicine';
import SportsOutdoor from './Components/Home/Sports-Outdoor';
import BabyToys from './Components/Home/Baby-Toys';
import GroceriesPets from './Components/Home/Groceries-Pets';
import HealthBeauty from './Components/Home/Health-Beauty';
import ProductDetails from './Components/Home/ProductDetails';
import ProceedToCheckout from './Components/ProceedToCheckout';
import BuyNow from './Components/buynow';

function App() {
  return (
    <Router>
      <CartProvider>
      <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/women-fashion" element={<WomenFashion />} />
          <Route path='/men-fashion' element={<MenFashion/>}/>
          <Route path='/Electronics' element={<Electronics/>}/>
          <Route path='/HomeLifestyle' element={<HomeLifestyle/>}/>
          <Route path='/Medicine' element={<Medicine/>}/>
          <Route path='/SportsOutdoor' element={<SportsOutdoor/>}/>
          <Route path='/BabyToys' element={<BabyToys/>}/>
          <Route path='/GroceriesPets' element={<GroceriesPets/>}/>
          <Route path='/HealthBeauty' element={<HealthBeauty/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/ProceedToCheckout" element={<ProceedToCheckout/>} />
          <Route path="/BuyNow" element={<BuyNow />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}
        </Routes>
      <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
