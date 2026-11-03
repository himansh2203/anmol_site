import React from "react";
import "../css/user.css"; // Make sure to create and style this CSS file
import { useNavigate } from "react-router-dom";

function UserPanel() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear user session/token here if needed
    navigate("/login");
  };

  return (
    <div className="user-panel">
      <h2 className="user-panel-title">User Dashboard</h2>
      <div className="user-cards">
        <div className="user-card" onClick={() => navigate("/your-orders")}>
          <h3>Your Orders</h3>
          <p>View your past and current orders.</p>
        </div>
        <div className="user-card" onClick={() => navigate("/track-order")}>
          <h3>Track Order</h3>
          <p>Track the status of your orders.</p>
        </div>
        <div className="user-card" onClick={() => navigate("/your-address")}>
          <h3>Your Address</h3>
          <p>Manage your saved addresses.</p>
        </div>
        <div className="user-card" onClick={() => navigate("/your-info")}>
          <h3>Your Information</h3>
          <p>View and edit your profile information.</p>
        </div>
      </div>
      <button className="signout-btn" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default UserPanel;
