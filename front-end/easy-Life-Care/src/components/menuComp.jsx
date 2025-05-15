import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "../pages/contactUs";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          href="/easy-Life-Care"
          style={{ height: "70px", marginRight: "10px" }}
        >
          <img
            src="./public/logo.ico"
            alt="Easy Life Care Logo"
            style={{ height: "70px", marginRight: "10px" }} // Adjust height and spacing as needed
          />
          <b>Easy Life Care</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutUs">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contactUs">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/terms">
              Terms & Conditions
            </Nav.Link>
            <Nav.Link as={Link} to="/privacy">
              Privacy Policy
            </Nav.Link>
            <Nav.Link as={Link} to="/shipping">
              Shipping Policy
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              Login{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              SignUp{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ marginRight: "0px" }}
              />
              Cart{""}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
