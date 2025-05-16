import React from "react";
import { Nav } from "react-bootstrap";
import "../css/bottom.css"; // Importing the CSS file

function Bottom() {
  return (
    <div className="bottom">
      <Nav.Link href="/" className="bottom-logo">
        <img src="logo.ico" alt="logo" width="150" height="150" />
      </Nav.Link>

      <div className="bottom-links">
        <Nav.Link href="/" className="bottom-link">
          Home
        </Nav.Link>
        <Nav.Link href="/products" className="bottom-link">
          Products
        </Nav.Link>
        <Nav.Link href="/aboutUs" className="bottom-link">
          About Us
        </Nav.Link>
        <Nav.Link href="/contactUs" className="bottom-link">
          Contact Us
        </Nav.Link>
        <Nav.Link href="/terms" className="bottom-link">
          Terms & Conditions
        </Nav.Link>
        <Nav.Link href="/privacy" className="bottom-link">
          Privacy Policy
        </Nav.Link>
        <Nav.Link href="/shipping" className="bottom-link">
          Shipping Policy
        </Nav.Link>
      </div>

      <div className="bottom-about">
        <div className="bottom-about-title">Why Easy Life Care?</div>
        <div className="bottom-about-text">
          Easy Life Care simplifies access to holistic healthcare by offering
          trusted Ayurvedic and wellness products. It supports natural healing,
          boosts immunity, and promotes long-term well-being. Combining
          traditional knowledge with modern convenience for a healthier life.
        </div>
      </div>
    </div>
  );
}

export default Bottom;
