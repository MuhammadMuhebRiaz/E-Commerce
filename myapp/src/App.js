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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<ErrorPage />} /> 
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/wishlist" element={<Wishlist/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;