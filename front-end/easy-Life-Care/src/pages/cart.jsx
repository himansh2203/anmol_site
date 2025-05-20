import React from "react";
import { useCart } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleProceedToCheckout = () => {
    // Navigate to the checkout page with cart items
    navigate("/checkout", { state: { cartItems, total: calculateTotal() } });
  };

  return (
    <div className="cart-container">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {/* Display success message if redirected from Products page */}
      {location.state?.message && (
        <div className="alert alert-success text-center">
          {location.state.message}
        </div>
      )}
      <div className="cart-content">
        <div className="row">
          {/* Cart Items Section */}
          <div className="col-md-8">
            <div className="cart-items-container">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="card mb-3 shadow-sm">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded-start"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">Price: ₹{item.price}</p>
                          <div className="quantity-controls">
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() =>
                                updateCartItemQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              disabled={item.quantity === 1} // Disable if quantity is 1
                            >
                              -
                            </button>
                            <span className="quantity-value">
                              {item.quantity}
                            </span>
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() =>
                                updateCartItemQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="btn btn-danger btn-sm mt-2"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">Your cart is empty.</p>
              )}
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Order Summary</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Total Items: <strong>{cartItems.length}</strong>
                </p>
                <p className="card-text">
                  Total Price: <strong>₹{calculateTotal()}</strong>
                </p>
                <button
                  className="btn btn-success w-100"
                  onClick={handleProceedToCheckout}
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
