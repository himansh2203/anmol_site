import "../css/signup.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

function Signup() {
  const location = useLocation();

  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  // State to manage success or error messages
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.pathname === "/signup") {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    };
  }, [location.pathname]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.text();
        window.alert("User registered successfully!"); // Show success alert
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          password: "",
        }); // Reset form
      } else {
        const errorData = await response.text();
        setMessage(errorData || "Failed to register user");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <Card className="signup-card">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {message && <p className="text-center">{message}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                rows={3}
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
