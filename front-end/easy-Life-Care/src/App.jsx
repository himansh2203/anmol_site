import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import Example from "./components/menuComp.jsx";
import CollapsibleExample from "./components/menuComp.jsx";
import Slideshow from "./components/imageSlider.jsx";
import ProductList from "./components/productList.jsx";
import Bottom from "./components/bottom.jsx";
import ReviewSlider from "./components/customerReview.jsx";
import ContactUs from "./pages/contactUs.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import AboutUs from "./pages/aboutUs.jsx";
import Products from "./pages/products.jsx";
import Foot from "./components/foot.jsx";
import Cart from "./pages/cart.jsx";
import Terms from "./pages/terms.jsx";
import Privacy from "./pages/privacy.jsx";
import Shipping from "./pages/shipping.jsx";
import Checkout from "./pages/checkout.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <CollapsibleExample />
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      <Slideshow />
      <div className="elc1">
        <div className="elc1-1">Authentic Ayurveda: Easy Life Care</div>
        <div className="elc1-2">
          Explore our collection of top selling Ayurvedic products and
          alternative medicines in India.
        </div>
      </div>
      <ProductList />
      <br></br>
      <div className="elc2">
        We manufacture, curate, and make available online, authentic ayurvedic
        products in India made from indigenously sourced herbs from forests and
        mountains across India renowned for their healing vegetations rich in
        medicinal properties.
      </div>
      <ReviewSlider />
      <Bottom />
      <Foot />
    </CartProvider>
  );
}

export default App;
