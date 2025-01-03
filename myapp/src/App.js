import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footersection'; 
import Home from './Components/Home';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import About from './Components/About';
import ErrorPage from './Components/ErrorPage';
import Login from './Components/Login';
import ShoppingCart from './Components/ShoppingCart';
import MyAccount from './Components/MyAccount';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<ErrorPage />} /> 
        <Route path="/myAccount" element={<MyAccount />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
