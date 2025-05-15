import React from "react";
import { Nav } from "react-bootstrap"; // Import Nav from react-bootstrap

function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom_1">
        <img src="logo.ico" alt="logo" width="150px" height="150px"></img>
      </div>
      <div className="bottom_2">
        <Nav.Link href="/" className="bottom_2_1">
          Home
        </Nav.Link>
        <Nav.Link href="/products" className="bottom_2_2">
          Products
        </Nav.Link>
        <Nav.Link href="/aboutUs" className="bottom_2_5">
          About Us
        </Nav.Link>
        <Nav.Link href="/contactUs" className="bottom_2_5">
          Contact Us
        </Nav.Link>
        <Nav.Link href="/terms" className="bottom_2_3">
          Terms & conditions
        </Nav.Link>
        <Nav.Link href="/privacy" className="bottom_2_3">
          Privacy Policy
        </Nav.Link>
        <Nav.Link href="/shipping" className="bottom_2_4">
          Shipping Policy
        </Nav.Link>
      </div>
      <div className="bottom_3">
        <div className="bottom_3_1">Why Easy Life Care ? </div>
        <div className="bottom_3_2">
          <div>
            Easy Life Care simplifies access to holistic healthcare by offering
          </div>
          <div>
            trusted Ayurvedic and wellness products. It supports natural
            healing,
          </div>
          <div>
            boosts immunity, and promotes long-term well-being-combining
          </div>
          <div>
            traditional knowledge with modern convenience for a healthier life.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
