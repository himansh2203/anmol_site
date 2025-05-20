import { Nav } from "react-bootstrap";
import "../css/bottom.css"; // Importing the CSS file

function Bottom() {
  return (
    <div className="bottom">
      <Nav.Link to="/" className="bottom-logo">
        <img src="logo.ico" alt="logo" />
      </Nav.Link>

      <div className="bottom-links">
        <Nav.Link to="/" className="bottom-link">
          Home
        </Nav.Link>
        <Nav.Link to="/products" className="bottom-link">
          Products
        </Nav.Link>
        <Nav.Link to="/aboutUs" className="bottom-link">
          About Us
        </Nav.Link>
        <Nav.Link to="/contactUs" className="bottom-link">
          Contact Us
        </Nav.Link>
        <Nav.Link to="/terms" className="bottom-link">
          Terms & Conditions
        </Nav.Link>
        <Nav.Link to="/privacy" className="bottom-link">
          Privacy Policy
        </Nav.Link>
        <Nav.Link to="/shipping" className="bottom-link">
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
