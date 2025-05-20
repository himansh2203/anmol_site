import { Link } from "react-router-dom";
import "../css/bottom.css"; // Importing the CSS file

function Bottom() {
  return (
    <div className="bottom">
      <Link to="/" className="bottom-logo">
        <img src="logo.ico" alt="logo" />
      </Link>

      <div className="bottom-links">
        <Link to="/" className="bottom-link">
          Home
        </Link>
        <Link to="/products" className="bottom-link">
          Products
        </Link>
        <Link to="/aboutUs" className="bottom-link">
          About Us
        </Link>
        <Link to="/contactUs" className="bottom-link">
          Contact Us
        </Link>
        <Link to="/terms" className="bottom-link">
          Terms & Conditions
        </Link>
        <Link to="/privacy" className="bottom-link">
          Privacy Policy
        </Link>
        <Link to="/shipping" className="bottom-link">
          Shipping Policy
        </Link>
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
