// ProductCard.jsx
import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useCart } from "../context/CartContext"; // Import the CartContext

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Access the addToCart function from the context

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    alert(`${product.name} has been added to your cart!`); // Show a window alert
  };

  return (
    <Card
      style={{
        width: "18rem",
        margin: "1rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <Card.Img
        variant="top"
        src={product.image}
        style={{
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {product.name}
        </Card.Title>
        <Card.Text>
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            ₹{product.price.toLocaleString()}
          </span>{" "}
          <small
            style={{
              color: "#6c757d",
              textDecoration: "line-through",
              fontSize: "0.9rem",
            }}
          >
            ₹{product.mrp.toLocaleString()}
          </small>
          <Badge
            bg="success"
            style={{
              marginLeft: "8px",
              fontSize: "0.8rem",
              padding: "5px 8px",
            }}
          >
            5 ★
          </Badge>
        </Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center the button horizontally
            marginTop: "10px",
          }}
        >
          <Button
            variant="outline-dark"
            style={{
              padding: "10px 20px",
              fontSize: "0.9rem",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
            onClick={handleAddToCart} // Add the product to the cart and show alert
          >
            ADD TO CART
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
