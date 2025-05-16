// ProductList.jsx
import React from "react";
import ProductCard from "./productCard";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/ayur.jpg";

const products = [
  {
    name: "Aadved Sleep",
    image: img1,
    price: 2499,
    mrp: 3100,
  },
  {
    name: "Liv Muztang Capsule",
    image: img1,
    price: 4999,
    mrp: 9000,
  },
  {
    name: "Liv Muztang Capsule",
    image: img1,
    price: 4999,
    mrp: 9000,
  },
  {
    name: "Liv Muztang Capsule",
    image: img1,
    price: 4999,
    mrp: 9000,
  },
  {
    name: "Liv Muztang Capsule",
    image: img1,
    price: 4999,
    mrp: 9000,
  },
  {
    name: "Liv Muztang Capsule",
    image: img1,
    price: 4999,
    mrp: 9000,
  },
];

const ProductList = () => {
  return (
    <Container className="py-4">
      <div className="text-center mb-3">
        <b>Top Selling Products</b>
        <div className="text-muted" style={{ padding: "30px " }}>
          We manufacture, curate, and make available online, authentic ayurvedic
          products in India made from indigenously sourced herbs from forests
          and mountains across India renowned for their healing vegetations rich
          in medicinal properties.
        </div>
      </div>
      <Row>
        {products.map((product, index) => (
          <Col md={4} key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
