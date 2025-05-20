import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import CollapsibleExample from "./components/menuComp.jsx";
import ContactUs from "./pages/contactUs.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import AboutUs from "./pages/aboutUs.jsx";
import Products from "./pages/products.jsx";
import Cart from "./pages/cart.jsx";
import Terms from "./pages/terms.jsx";
import Privacy from "./pages/privacy.jsx";
import Shipping from "./pages/shipping.jsx";
import Checkout from "./pages/checkout.jsx";
import Home from "./pages/home.jsx";
import FAQ from "./components/faq.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <CollapsibleExample />
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
