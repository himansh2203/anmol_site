import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/checkout.css";

function Checkout() {
  const location = useLocation();
  const { cartItems, total } = location.state || { cartItems: [], total: 0 }; // Retrieve cart items and total from state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (location.pathname === "/checkout") {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }

    return () => {
      document.body.style.overflow = "hidden"; // Re-enable scrolling
    };
  }, [location.pathname]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      // Redirect to a payment page or integrate with a payment gateway
      console.log("Order placed:", cartItems);
      window.location.href = "https://www.example-payment-gateway.com";
    } else {
      console.log("Validation failed. Please fill out all required fields.");
    }
  };

  return (
    <div className="checkout-page">
      <h2 className="text-center mb-4">Checkout</h2>
      <div className="checkout-container">
        <div className="card shadow-sm">
          <div className="card-body">
            {/* Order Summary Section */}
            <div className="order-summary mb-4">
              <h4 className="text-primary mb-3">Order Summary</h4>
              <ul className="list-group list-group-flush">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between"
                    >
                      <span>
                        {item.name} (x{item.quantity})
                      </span>
                      <span>₹{item.price * item.quantity}</span>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item text-center">
                    Your cart is empty.
                  </li>
                )}
                {cartItems.length > 0 && (
                  <li className="list-group-item d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>₹{total}</strong>
                  </li>
                )}
              </ul>
            </div>

            {/* Shipping Address Section */}
            <div className="shipping-address">
              <h4 className="text-success mb-3">Shipping Address</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    rows="3"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.address && (
                    <small className="text-danger">{errors.address}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <small className="text-danger">{errors.phone}</small>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-success w-100"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
