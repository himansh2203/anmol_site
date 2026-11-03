import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../css/login.css"; // You can reuse your login styles

function ForgotPassword() {
  const [identifier, setIdentifier] = useState(""); // Phone or email
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        "http://localhost:8080/api/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ identifier }),
        }
      );

      if (response.ok) {
        const resText = await response.text();
        setMessage(resText || "Password reset instructions sent!");
      } else {
        const errText = await response.text();
        setError(errText || "Failed to send reset instructions.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="login-page">
      <Card className="login-card">
        <Card.Body>
          <h2 className="text-center mb-4">Forgot Password</h2>

          {message && <p className="text-success text-center">{message}</p>}
          {error && <p className="text-danger text-center">{error}</p>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formIdentifier" className="mb-3">
              <Form.Label>Enter your phone or email:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone number or Email"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send OTP
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ForgotPassword;
