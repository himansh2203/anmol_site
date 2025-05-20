import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/login.css"; // Your custom styling
import { Form, Button, Card } from "react-bootstrap";

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.text();
        setMessage(""); // Clear any previous messages
        navigate("/cart"); // Redirect to the cart page
      } else {
        const errorData = await response.text();
        setMessage(errorData || "Login failed");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <Card className="login-card">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {message && <p className="text-danger text-center">{message}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Mobile Number:</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter mobile number"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                maxLength={10}
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
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
